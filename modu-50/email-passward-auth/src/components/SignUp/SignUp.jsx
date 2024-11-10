import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    //reset error and status
    setErrorMessage("");
    setSuccess(false);
    if(!terms){
      setErrorMessage('Please accept our terms and condition')
      return
    }

    // validation password

    if (password.length < 6) {
      setErrorMessage("password should be 6 characters or longers");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "at least one uppercase, one lowercase, one number, one special characters"
      );
      return;
    }

    //create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => setErrorMessage(error.message));
    setSuccess(false);
  };
  return (
    <div className="card bg-base-100 w-full mx-auto my-6 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Sign Up Now</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-xs absolute right-2 top-12"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <div className="form-control">
            <label className="label justify-start gap-3 cursor-pointer">
              <input type="checkbox" name="terms" className="checkbox" />
              <span className="label-text">Accept Our Terms and Conditions</span>
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        {success && <p className="text-green-600">Sign up is successful</p>}
        <p>Already have an account Please?<Link to='/login'>Login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
