import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

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
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;