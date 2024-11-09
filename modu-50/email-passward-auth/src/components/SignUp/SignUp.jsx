

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
const SignUp = () => {
  const [error, setError] = useState('')

    const handleSignUp = e => {
        e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        //reset error and status
        setError('')

        //create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          console.log(result.user)
        })
        .catch(error => setError(error.message))

    }
  return (
        <div className="card bg-base-100 w-full mx-auto my-6 max-w-sm shrink-0 shadow-2xl">
            
      <h1 className="text-3xl font-bold text-center">Sign Up Now</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password" name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            {
              error && <p className="text-red-600">{error}</p>
            }
          </form>
        </div>
  );
};

export default SignUp;
