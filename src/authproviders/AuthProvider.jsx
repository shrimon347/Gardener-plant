/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
  } from "firebase/auth";
import app from "../firebase/firrbase.config";
import {  createContext, useState } from "react";
import { useEffect } from "react";

  export const AuthContext = createContext(null)
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const ProfileUpdate = (displayName, photoURL) => {

        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
          });
      };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

  
    const authInfo = {
        user,
        loading,
        signIn,
        signInGoogle,
        createUser,
        logout,
        ProfileUpdate
    }

  return (
   <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider