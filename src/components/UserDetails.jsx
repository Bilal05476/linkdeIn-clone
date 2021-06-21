import { MdLabel } from "react-icons/md";
import "./UserDetails.css";

const UserDetails = () => {
  return (
    <div className="userDetails">
      <img
        className="cover"
        src="https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg"
        alt="cover"
      />
      <img
        className="profile"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="profile"
      />
      <div className="userInfo">
        <h4 className="userName">User Name</h4>
        <p className="userAbout mb-0">
          User About || User About || User About || User About || User About ||
          User About
        </p>
      </div>
      <hr />
      <div className="profileAnalytics">
        <div className="profileViews">
          <p>Who viewed your profile</p>
          <strong>128</strong>
        </div>
        <div className="postViews">
          <p>views of your post</p>
          <strong>428</strong>
        </div>
      </div>
      <hr />
      <div
        style={{ fontSize: "0.7rem" }}
        className="myItems pl-3 pb-3 d-flex align-items-center"
      >
        <MdLabel style={{ fontSize: "1.1rem" }} className="mr-1" /> My Items
      </div>
    </div>
  );
};

export default UserDetails;
