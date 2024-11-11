import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import {createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = ()=> {
        setLoading(true)
       return signOut(auth)
    }

    const signInWithGoogle = ()=> {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubscribe()
    }, [])

    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create provider 
 * 3. set a value with something (authInfo)
 * 4. [attention please !!!]
 * 5. use the auth provider in the main.jsx
 * 6.access the children inside the authProvider in the main.jsx
 * 7. export AuthContext
 */