import "./PostSec.css";
import { BsThreeDots } from "react-icons/bs";

const PagePost = () => {
  return (
    <div className="pagePost">
      <div className="postHeader">
        <div className="headerLeft">
          <img
            className="pageLogo"
            src="https://media-exp1.licdn.com/dms/image/C5603AQEQl3TdXRZAxQ/profile-displayphoto-shrink_100_100/0/1561463236720?e=1629936000&v=beta&t=s-fGyByCn8y7cn8DnUjlwactRwosFBXbA-4SbQrcILs"
            alt="profile"
          />
          <div className="pagePostInfo">
            <p className="mb-0" style={{ fontWeight: "600" }}>
              Page Name
            </p>
            <small className="follower">92,991,222 followers</small>
            <small className="status">Promoted</small>
          </div>
        </div>
        <div className="headerRight">
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default PagePost;
