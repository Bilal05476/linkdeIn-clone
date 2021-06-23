import "./AuthComponent.css";
import Google from "../img/google.png";
const JoinNow = () => {
  return (
    <div className="joinNow">
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
        width="10%"
        alt="logo"
        className="mb-3"
      />
      <h2 style={{ fontWeight: "400" }}>
        Make the most of your professional life
      </h2>
      <div className="joinNowDetails">
        <form action="" className="joinNowForm">
          <label className="m-0 mt-1" htmlFor="email">
            Email or phone number
          </label>
          <input type="text" name="email" />
          <label className="m-0 mt-1" htmlFor="password">
            Email or phone number
          </label>
          <input type="password" name="password" />
          <small className="text-center m-4" style={{ fontSize: ".7rem" }}>
            By clicking Agree & Join, you agree to the LinkedIn
            <span className="policy"> User Agreement, Privacy Policy</span>, and{" "}
            <span className="policy">Cookie Policy.</span>
          </small>
          <button className="joinNowButton">Agree & Join</button>
        </form>
        <div className="partition">
          <div className="line"></div>
          <small>or</small>
          <div className="line"></div>
        </div>
        <button className="googleBtn">
          <img src={Google} width="8%" className="mr-2" alt="google" />
          Join With Google
        </button>
        <p className="m-0 text-center">
          Already on LinkedIn? <span className="signInLink">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default JoinNow;
