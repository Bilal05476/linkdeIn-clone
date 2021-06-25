import "./UserPopover.css";
import { BsFillSquareFill } from "react-icons/bs";
import Popover from "@material-ui/core/Popover";
import { useEffect, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { useStateValue } from "../StateProvider";
import { auth, db } from "../firebase";

const UserPopover = () => {
  const [{ user }, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = useState(null);
  const getUserData = db.collection("users").doc(user.uid);
  const [userName, setUserName] = useState("");
  const [userOccupation, setUserOccupation] = useState("");
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    return getUserData.get().then((doc) => {
      setUserName(doc.data().name);
      setUserOccupation(doc.data().occupation);
      setUserImage(doc.data().avatar);
    });
  }, [user, getUserData]);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result,
        });
        localStorage.setItem("user", null);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div
        className="icon m-0"
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {userImage && (
          <img
            style={{ borderRadius: "50%" }}
            src={user?.photoURL}
            width="30px"
            height="30px"
            src={userImage}
            alt="profile"
          />
        )}
        {user?.photoURL && (
          <img
            style={{ borderRadius: "50%" }}
            src={user?.photoURL}
            width="30px"
            height="30px"
            src={user?.photoURL}
            alt="profile"
          />
        )}
        <p className="d-flex" style={{ fontSize: ".7rem" }}>
          Me <RiArrowDownSFill size="16" />
        </p>
      </div>
      <Popover
        className="userPopoverTab"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <div className="userPopover">
          <div className="userPopHeader">
            <div className="userPopInfos">
              {userImage && (
                <img className="popOverProfile" src={userImage} alt="profile" />
              )}
              {user?.photoURL && (
                <img
                  className="popOverProfile"
                  src={user?.photoURL}
                  alt="profile"
                />
              )}
              <div className="userPopInfo">
                <h6 className="mb-0">
                  {userName} {user?.displayName}
                </h6>
                <p className="mb-0">
                  {!userOccupation
                    ? "Front End Developer || JavaScript Developer || Pythoneer"
                    : userOccupation}
                </p>
              </div>
            </div>
            <button className="viewProfile">View Profile</button>
          </div>
          <hr className="m-0" />
          <div className="userPopBody">
            <div className="userPopBodyTop">
              <h6 className="mb-1" style={{ fontSize: "0.9rem" }}>
                Account
              </h6>
              <div style={{ fontSize: "0.8rem" }}>
                <p className="userAccountPara">
                  <BsFillSquareFill
                    style={{ color: "goldenrod", marginRight: "5px" }}
                  />
                  Try Premium Free for 1 Month
                </p>
              </div>
              <small>Setting & Privacy</small>
              <br />
              <small>Help</small>
              <br />
              <small>Language</small>
            </div>
            <hr className="m-0" />
            <div className="userPopBodyBottom">
              <h6 className="mb-1" style={{ fontSize: "0.9rem" }}>
                Manage
              </h6>
              <small>Posts & Activity</small>
              <br />
              <small>Company: Name</small>
              <br />
              <small>Job Posting Account</small>
            </div>
          </div>
          <hr className="m-0" />
          <div className="signOutBtn">
            <small className="signOut" onClick={signOut}>
              Sign Out
            </small>
          </div>
        </div>
      </Popover>
    </>
  );
};

export default UserPopover;
