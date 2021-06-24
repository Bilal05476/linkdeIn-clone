import "./AuthComponent.css";
import Google from "../img/google.png";
import { useState } from "react";
import { auth, provider, db } from "../firebase";
import { useStateValue } from "../StateProvider";

const JoinNow = ({ isFlipped, setIsFlipped }) => {
  const [joinEmail, setJoinEmail] = useState("");
  const [joinPass, setJoinPass] = useState("");
  const [joinError, setJoinError] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const onSubmit = (e) => {
    e.preventDefault();
    //auth
    auth
      .createUserWithEmailAndPassword(joinEmail, joinPass)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        localStorage.setItem("user", JSON.stringify(result.user));
        //send data to database
        return db.collection("users").doc(result.user.uid).set({
          email: joinEmail,
        });
      })
      .catch((error) => {
        setJoinError(error.message);
        setJoinEmail(joinEmail);
      });
    setJoinEmail("");
    setJoinPass("");
    console.log(user);
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
        localStorage.setItem("user", JSON.stringify(result.user));
        //send data to database
        return db.collection("users").doc(result.user.uid).set({
          email: result.user.email,
        });
      })
      .catch((error) => {
        setJoinError(error.message);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="joinNow">
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
        width="10%"
        alt="logo"
        className="mb-3"
      />
      <h2 style={{ fontWeight: "300", fontSize: "1.8rem" }}>
        Make the most of your professional life
      </h2>
      <div className="joinNowDetails">
        <form onSubmit={onSubmit} className="joinNowForm">
          <label className="m-0 mt-1" htmlFor="email">
            Email or phone number
          </label>
          <input
            value={joinEmail}
            onChange={(e) => setJoinEmail(e.target.value)}
            type="text"
            name="email"
          />
          <label className="m-0 mt-1" htmlFor="password">
            Email or phone number
          </label>
          <input
            value={joinPass}
            onChange={(e) => setJoinPass(e.target.value)}
            type="password"
            name="password"
          />
          {joinError && <div className="my-2 joinError">{joinError}</div>}

          <small className="text-center m-4" style={{ fontSize: ".7rem" }}>
            By clicking Agree & Join, you agree to the LinkedIn
            <span className="policy"> User Agreement, Privacy Policy</span>, and{" "}
            <span className="policy">Cookie Policy.</span>
          </small>
          <button type="submit" className="joinNowButton">
            Agree & Join
          </button>
        </form>
        <div className="partition">
          <div className="line"></div>
          <small>or</small>
          <div className="line"></div>
        </div>
        <button onClick={googleSignIn} className="googleBtn">
          <img src={Google} width="8%" className="mr-2" alt="google" />
          Join With Google
        </button>
        <p className="m-0 text-center">
          Already on LinkedIn?{" "}
          <span onClick={handleClick} className="signInLink">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default JoinNow;
