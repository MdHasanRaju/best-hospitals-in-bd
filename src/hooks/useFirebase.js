import React, { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
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
import { useHistory } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLogin, setIsLogin] = useState(false);

  const history = useHistory();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registrationWithName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const registrationWithEmailPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // Save User to database
        // saveUser(email, name, "POST");
        registrationWithName(name);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // const toggleLogin = (e) => {
  //   setIsLogin(e.target.checked);
  //   setError("");
  // };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleRegistration = (e) => {
  //   e.preventDefault();
  //   if (password?.length < 5) {
  //     return setError("Password should be at least 6 characters");
  //   }

  //   isLogin ? processLogin(email, password) : RegisterNewUser(email, password);
  // };

  // const processLogin = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       setUser(result.user);
  //       setError("");
  //     })
  //     .catch((error) => {
  //       setError("Password doesn't match.");
  //       setTimeout(() => {
  //         setError("");
  //       }, 5000);
  //     });
  // };

  // const RegisterNewUser = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       setUser(result?.user);
  //       setUserName();
  //       setError("");

  //     })
  //     .catch((error) => {
  //       setError("This Email has taken once, try with another one");
  //       setTimeout(() => {
  //         setError("");
  //       }, 5000);
  //     });
  // };

  // const setUserName = () => {
  //   updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  // };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const signInUsingEmailAndPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    setUser,
    error,
    setError,
    isLoading,
    setIsLoading,
    // isLogin,
    signInUsingGoogle,
    registrationWithEmailPassword,
    signInUsingEmailAndPassword,
    // toggleLogin,
    // handleNameChange,
    // handleEmailChange,
    // handlePasswordChange,
    // handleRegistration,
    // processLogin,
    logOut,
  };
};

export default useFirebase;
