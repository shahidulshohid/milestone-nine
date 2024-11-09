import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
      });
  };

  const handleGoogleLogout = ()=> {
    signOut(auth)
    .then(result => {
        setUser(result)
    })
    .catch(error => console.log(error))
  }

  const handleGithubSignIn = ()=>{
    signInWithPopup(auth, githubProvider)
    .then(result => {
      console.log(result.user)
      setUser(result.user)
    })
    .catch(error => console.log('Error', error)
    )
  }

  console.log(user)
  return (
    <div>
      {
        user ? <button onClick={handleGoogleLogout}>Logout</button>: <>
        <button onClick={handleGoogleSignIn}>Login with google</button> 
        <button onClick={handleGithubSignIn}>Login with github</button>
        </>
      }

      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <h3>{user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
