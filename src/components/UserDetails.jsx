import { MdLabel } from "react-icons/md";
import "./UserDetails.css";
import { BsFillSquareFill } from "react-icons/bs";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const UserDetails = () => {
  const [{ user }] = useStateValue();
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

  return (
    <div className="userDetails">
      <img
        className="cover"
        src="https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg"
        alt="cover"
      />
      {userImage && <img className="profile" src={userImage} alt="profile" />}

      <div className="userInfo">
        <h4 className="userName">{userName}</h4>
        <p className="userAbout mb-0">
          {!userOccupation
            ? "Full Stack Website Developer | JavaScript Developer | Pythoneer"
            : userOccupation}
        </p>
      </div>
      <hr className="my-1" />
      <div className="profileAnalytics">
        <div className="profileViews">
          <p className="mb-0">Who viewed your profile</p>
          <strong>128</strong>
        </div>
        <div className="postViews">
          <p className="mb-0">views of your post</p>
          <strong>428</strong>
        </div>
      </div>
      <hr className="my-1" />
      <div className="profileAnalytics">
        <div className="profileViews">
          <p>Try exclusive tools & insights</p>
        </div>
        <div className="postViews">
          <p style={{ fontWeight: "600", color: "rgb(19, 180, 255)" }}>
            <BsFillSquareFill
              style={{ color: "goldenrod", marginRight: "5px" }}
            />
            Try Premium Free for 1 Month
          </p>
        </div>
      </div>
      <hr className="mb-0 mt-1" />
      <div
        style={{ fontSize: "0.7rem" }}
        className="myItems pl-3 py-3 d-flex align-items-center"
      >
        <MdLabel style={{ fontSize: "1.1rem" }} className="mr-1" /> My Items
      </div>
    </div>
  );
};

export default UserDetails;
