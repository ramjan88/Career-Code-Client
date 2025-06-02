import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const googleProvider =new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(false)

  //create  user / register
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signIn user / Login user

  const SignInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // signin with google

  const signInGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  //signout user/ logout user
  const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)
  }


  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
      console.log(currentUser);
    })
    return ()=>{
      unSubscribe()
    }
  },[])

  const userInfo = {
    createUser,
    user,
    setUser,
    SignInUser,
    loading,
    signOutUser,
    signInGoogle,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
