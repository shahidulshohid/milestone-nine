
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider()
    
    const handleLoginWithGoogle = ()=> {
        signInWithPopup(auth, GoogleProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => {
            console.log('Error', error)
        })
    }

    const handleGoogleLogout = ()=> {
        signOut(auth)
        .then(result => {
            setUser(result)
        })
        .catch(error => console.log(error))
    }

    const loginWithGithub = ()=>{
        signInWithPopup(auth, GithubProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => console.log(error))
    }
    
    return (
        <div>
            {
                user ? <button onClick={handleGoogleLogout}>LogOut</button> : <>
                <button onClick={handleLoginWithGoogle}>Login with google</button>
                <button onClick={loginWithGithub}>Login with github</button>
                </>
            }
            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <h4>{user.email}</h4>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;