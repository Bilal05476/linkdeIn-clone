import { MdLabel } from "react-icons/md";
import "./UserDetails.css";
import { BsFillSquareFill } from "react-icons/bs";

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
        src="https://media-exp1.licdn.com/dms/image/C5603AQEQl3TdXRZAxQ/profile-displayphoto-shrink_100_100/0/1561463236720?e=1629936000&v=beta&t=s-fGyByCn8y7cn8DnUjlwactRwosFBXbA-4SbQrcILs"
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
      <div className="profileAnalytics">
        <div className="profileViews">
          <p>Try exclusive tools & insights</p>
        </div>
        <div className="postViews">
          <p style={{ fontWeight: "600" }}>
            <BsFillSquareFill
              style={{ color: "goldenrod", marginRight: "5px" }}
            />
            Try Premium Free for 1 Month
          </p>
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
