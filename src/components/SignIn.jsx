import "./AuthComponent.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { auth, provider } from "../firebase";
// import { useStateValue } from "../StateProvider";

const SignIn = () => {
  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");
  // const [{ user }, dispatch] = useStateValue();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(signEmail);
    console.log(signPass);
  };

  return (
    <div className="signIn">
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
        width="10%"
        alt="logo"
        className="mb-3 mt-3"
      />
      <form onSubmit={onSubmit} className="signInForm">
        <h3 style={{ fontSize: "1.9rem" }} className="mb-0">
          Sign in
        </h3>
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
        <span className="signInLink my-3 mb-4">Forgot Password?</span>
        <button type="submit" className="joinNowButton">
          Sign in
        </button>
      </form>
      <p className="m-0 my-5 text-center">
        New to LinkedIn?
        <NavLink to="/joinNow" style={{ textDecoration: "none" }}>
          <span className="signInLink mx-1">Join Now</span>
        </NavLink>
      </p>
    </div>
  );
};

export default SignIn;
