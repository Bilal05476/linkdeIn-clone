import "./AuthComponent.css";
import Google from "../img/google.png";
import { useState } from "react";
import { auth, provider, db } from "../firebase";
import { useStateValue } from "../StateProvider";

const JoinNow = ({ isFlipped, setIsFlipped }) => {
  const [joinEmail, setJoinEmail] = useState("");
  const [joinPass, setJoinPass] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinCountry, setJoinCountry] = useState("");
  const [joinCity, setJoinCity] = useState("");
  const [joinOccupation, setJoinOccupation] = useState("");
  const [joinImage, setJoinImage] = useState("");

  const [joinError, setJoinError] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [toggleForm, setToggleForm] = useState(false);

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
          name: joinName,
          country: joinCountry,
          city: joinCity,
          occupation: joinOccupation,
        });
      })
      .catch((error) => {
        setJoinError(error.message);
        setJoinEmail(joinEmail);
        setJoinName(joinName);
        setJoinPass(joinPass);
        setJoinCountry(joinCountry);
        setJoinCity(joinCity);
        setJoinOccupation(joinOccupation);
      });
    setJoinEmail("");
    setJoinPass("");
    setJoinName("");
    setJoinCountry("");
    setJoinCity("");
    setJoinOccupation("");

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
          {!toggleForm ? (
            <>
              <label className="m-0 mt-1" htmlFor="email">
                Email Address
              </label>
              <input
                value={joinEmail}
                onChange={(e) => setJoinEmail(e.target.value)}
                type="email"
                name="email"
              />
              <label className="m-0 mt-1" htmlFor="password">
                Password
              </label>
              <input
                value={joinPass}
                onChange={(e) => setJoinPass(e.target.value)}
                type="password"
                name="password"
              />
              <label className="m-0 mt-1" htmlFor="fullName">
                Full Name
              </label>
              <input
                value={joinName}
                onChange={(e) => setJoinName(e.target.value)}
                type="text"
                name="fullName"
              />{" "}
            </>
          ) : (
            ""
          )}
          {toggleForm ? (
            <>
              <label className="m-0 mt-1" htmlFor="country">
                Country
              </label>
              <input
                value={joinCountry}
                onChange={(e) => setJoinCountry(e.target.value)}
                type="text"
                name="country"
              />
              <label className="m-0 mt-1" htmlFor="city">
                City
              </label>
              <input
                value={joinCity}
                onChange={(e) => setJoinCity(e.target.value)}
                type="text"
                name="city"
              />
              <label className="m-0 mt-1" htmlFor="occupation">
                Occupation
              </label>
              <input
                value={joinOccupation}
                onChange={(e) => setJoinOccupation(e.target.value)}
                type="text"
                name="occupation"
              />
              <label className="m-0 mt-1" htmlFor="profile">
                Profile
              </label>
              <input
                onChange={(e) => setJoinImage(e.target.files[0])}
                type="file"
                name="profile"
              />
            </>
          ) : (
            ""
          )}
          {joinError && <div className="my-2 joinError">{joinError}</div>}

          <small className="text-center m-4" style={{ fontSize: ".7rem" }}>
            By clicking Agree & Join, you agree to the LinkedIn
            <span className="policy"> User Agreement, Privacy Policy</span>, and{" "}
            <span className="policy">Cookie Policy.</span>
          </small>

          {!joinCity || !joinCountry || !joinOccupation ? (
            " "
          ) : (
            <button type="submit" className="joinNowButton">
              Agree & Join
            </button>
          )}
        </form>
        {!joinEmail || !joinName || !joinPass ? (
          ""
        ) : (
          <>
            {!toggleForm && (
              <button
                onClick={() => setToggleForm(!toggleForm)}
                className="joinNowButton nextButton"
              >
                Next
              </button>
            )}
          </>
        )}
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
