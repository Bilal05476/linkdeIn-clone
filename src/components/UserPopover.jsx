import "./UserPopover.css";
import { BsFillSquareFill } from "react-icons/bs";

const UserPopover = () => {
  return (
    <div className="userPopover">
      <div className="userPopHeader">
        <div className="userPopInfos">
          <img
            className="popOverProfile"
            src="https://media-exp1.licdn.com/dms/image/C5603AQEQl3TdXRZAxQ/profile-displayphoto-shrink_100_100/0/1561463236720?e=1629936000&v=beta&t=s-fGyByCn8y7cn8DnUjlwactRwosFBXbA-4SbQrcILs"
            alt="profile"
          />
          <div className="userPopInfo">
            <h6 className="mb-0">User Name</h6>
            <p className="mb-0">
              Full Stack Website Developer || JavaScript Developer || Pythoneer
            </p>
          </div>
        </div>
        <button className="viewProfile">View Profile</button>
      </div>
      <hr className="m-0" />
      <div className="userPopBody">
        <div className="userPopBodyTop">
          <h6>Account</h6>
          <div style={{ fontSize: "0.8rem" }}>
            <p className="userAccountPara">
              <BsFillSquareFill
                style={{ color: "goldenrod", marginRight: "5px" }}
              />
              Try Premium Free for 1 Month
            </p>
          </div>
          <small>Setting</small>
          <br />
          <small>Help</small>
          <br />
          <small>Language</small>
        </div>
        <hr className="m-0" />
        <div className="userPopBodyBottom">
          <h6>Manage</h6>
          <small>Posts & Activity</small>
          <br />
          <small>Company: Name</small>
          <br />
          <small>Job Posting Account</small>
        </div>
      </div>
      <hr className="m-0" />
      <div className="signOutBtn">
        <small className="signOut">Sign Out</small>
      </div>
    </div>
  );
};

export default UserPopover;
