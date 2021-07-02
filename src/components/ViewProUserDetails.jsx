import "./ViewProUserDetails.css";
import { useStateValue } from "../StateProvider";

const ViewProUserDetails = ({
  userName,
  userOccupation,
  userImage,
  userCountry,
  userCity,
}) => {
  const [{ toggleTheme }] = useStateValue();

  return (
    <div
      className={toggleTheme ? "ViewProUserDetailsLight" : "ViewProUserDetails"}
    >
      <img
        className="proUserCover"
        src="https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg"
        alt="cover"
      />
      {userImage && (
        <img
          className="proUserProfile"
          src={userImage}
          alt="profile"
          style={{
            border: toggleTheme ? "4px solid #585858" : "4px solid #ccc",
          }}
        />
      )}
      <div className="d-flex">
        <div className="proUserDetails">
          <h4>{userName}</h4>
          <p className="m-0">{userOccupation}</p>
          <small
            className="m-0"
            style={{ color: toggleTheme ? "rgb(139, 139, 139)" : "#ccc" }}
          >
            Talks about #reactjs, #jamstack, #serverless, #mernstackdeveloper,
            and #websitedevelopment <br />
            {userCity}, {userCountry}
          </small>
          <div className="profileAnalytics">
            <small>1,559 followers 500+ connections</small>
          </div>
          <div className="profileBtn">
            <button>Open to</button>
            <button>Add section</button>
            <button>More</button>
          </div>
        </div>
        <div className="userPageDetails">
          <div className="userPageInfo">
            <img
              className=""
              src="https://dynamic.brandcrowd.com/asset/logo/9971bc9b-9d51-4b42-beca-b3ffe882efcd/logo?v=637102751107770000"
              alt="profile"
            />
            <h4 className="">Page Name</h4>
          </div>
          <div className="userProfession d-flex">
            <img
              className=""
              src="https://dynamic.brandcrowd.com/asset/logo/9971bc9b-9d51-4b42-beca-b3ffe882efcd/logo?v=637102751107770000"
              alt="profile"
            />
            <h4 className="">Company Name</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProUserDetails;
