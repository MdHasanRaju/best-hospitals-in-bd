import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user);
        })
        .catch(error => {
            setError(error.message)
            console.log(error.message)
        })
    }

    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };


    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password)
        if (password?.length <5) {
            return setError("Password should be at least 6 characters");
        }
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
              setUser(result.user)
              console.log(result.user)
              setError("");
          })
          .catch((error) => {
            setError(error.message)
            console.log(error.message)
          });
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            console.log(user);
          }
          else {
            setUser({})
          }
        });

    }, [])

    const logOut = () => {
        signOut(auth)
          .then(() => {
              setUser({})
          })
    }

    return {
        user,
        error,
        isLogin,
        toggleLogin,
        signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        logOut
    }
};

export default useFirebase;