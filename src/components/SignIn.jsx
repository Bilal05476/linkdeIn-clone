import "./AuthComponent.css";
import { useState } from "react";

const SignIn = () => {
  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(signEmail);
    console.log(signPass);
  };
  ret;
  return (
    <div className="signIn">
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
        width="10%"
        alt="logo"
        className="mb-3 mt-3"
      />
      <form onSubmit={onSubmit} className="signInForm">
        <h3 className="mb-0">Sign In</h3>
        <small className="mt-1 mb-3">
          Stay updated on your professional world
        </small>
        <input
          value={signEmail}
          onChange={(e) => setSignEmail(e.target.value)}
          type="text"
          placeholder="Email or phone"
        />
        <input
          value={signPass}
          onChange={(e) => setSignPass(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <span className="forgetPass my-3 mb-4">Forgot Password?</span>
        <button type="submit" className="joinNowButton">
          Sign in
        </button>
      </form>
      <p className="m-0 my-5 text-center">
        New to LinkedIn? <span className="signInLink">Join Now</span>
      </p>
    </div>
  );
};

export default SignIn;
