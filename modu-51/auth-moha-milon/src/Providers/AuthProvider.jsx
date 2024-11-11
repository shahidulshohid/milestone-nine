import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import {createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const name = 'shahidul islam'
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = ()=> {
       return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    }, [])

    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
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