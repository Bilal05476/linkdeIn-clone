import { MdLabel } from "react-icons/md";
import "./UserDetails.css";
import { BsFillSquareFill } from "react-icons/bs";
import { useStateValue } from "../StateProvider";

const UserDetails = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="userDetails">
      <img
        className="cover"
        src="https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg"
        alt="cover"
      />
      <img className="profile" src={user?.photoURL} alt="profile" />
      <div className="userInfo">
        <h4 className="userName">{user?.displayName}</h4>
        <p className="userAbout mb-0">
          Full Stack Website Developer || JavaScript Developer || Pythoneer
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
