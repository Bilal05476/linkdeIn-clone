import "./AuthComponent.css";
import { useState } from "react";
// import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

const SignIn = ({ isFlipped, setIsFlipped }) => {
  const [signEmail, setSignEmail] = useState("");
  const [signPass, setSignPass] = useState("");
  const [signError, setSignError] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const onSubmit = (e) => {
    e.preventDefault();
    //validate data from database
    auth
      .signInWithEmailAndPassword(signEmail, signPass)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        localStorage.setItem("user", JSON.stringify(result.user));
      })
      .catch((error) => {
        setSignError(error.message);
      });
    setSignEmail("");
    setSignPass("");
    setSignError("");
    console.log(user);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
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
        {signError && <div className="my-1 signError">{signError}</div>}

        <span className="signInLink my-3 mb-4">Forgot Password?</span>
        <button type="submit" className="joinNowButton">
          Sign in
        </button>
      </form>
      <p className="m-0 my-5 text-center">
        New to LinkedIn?{" "}
        <span onClick={handleClick} className="signInLink">
          Join Now
        </span>
      </p>
    </div>
  );
};

export default SignIn;
