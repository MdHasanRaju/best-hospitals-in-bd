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
  updateProfile,
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
      setIsLoading(true)      
      return signInWithPopup(auth, googleProvider)
        
    }

    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
        setError("");
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password?.length <5) {
            return setError("Password should be at least 6 characters");
        }
        isLogin ? processLogin(email, password): RegisterNewUser(email, password);
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            setError("");
        })
        .catch(error => {
            setError("Password doesn't match.");
            setTimeout(() => {
              setError("")
            }, 5000);
        })
    }

    const RegisterNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            setUser(result.user);
            setError("");
            setUserName();
          })
          .catch((error) => {
            setError("This Email has taken once, try with another one");
            setTimeout(() => {
              setError("")
            }, 5000);
          });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName:name})
        .then(result => {})
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
          setIsLoading(false)
        });

    }, [])

    const logOut = () => {
      setIsLoading(true)
        signOut(auth)
          .then(() => {
              setUser({})
          })
          .finally(() => setIsLoading(false))
    }

    return {
        user,
        setUser,
        error,
        setError,
        isLogin,
        isLoading,
        toggleLogin,
        signInUsingGoogle,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        processLogin,
        setIsLoading,
        logOut
    }
};

export default useFirebase;