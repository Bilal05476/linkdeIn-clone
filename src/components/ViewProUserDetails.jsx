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
      <div className="proUserDetails">
        <h4>{userName}</h4>
        <p className="m-0">{userOccupation}</p>
        <small
          className="m-0"
          style={{ color: toggleTheme ? "rgb(139, 139, 139)" : "#ccc" }}
        >
          {userCity}, {userCountry}
        </small>
      </div>
    </div>
  );
};

export default ViewProUserDetails;
