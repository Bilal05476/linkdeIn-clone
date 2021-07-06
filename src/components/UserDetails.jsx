import { MdLabel } from "react-icons/md";
import "./UserDetails.css";
import { BsFillSquareFill } from "react-icons/bs";
import { useStateValue } from "../StateProvider";
import { NavLink } from "react-router-dom";

const UserDetails = ({ userName, userImage, userOccupation }) => {
  const [{ toggleTheme }] = useStateValue();

  return (
    <>
      <div className={toggleTheme ? "userDetailsLight" : "userDetails"}>
        <img
          className="cover"
          src="https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg"
          alt="cover"
        />
        {userImage && (
          <img
            className="profile"
            src={userImage}
            alt="profile"
            style={{
              border: toggleTheme ? "4px solid #585858" : "4px solid #ccc",
            }}
          />
        )}

        <div className="userInfo">
          <NavLink
            to={`/${userName}`}
            style={{
              color: toggleTheme ? "#424242" : "#fff",
              textDecoration: "none",
            }}
          >
            <h4 className="userName ">{userName}</h4>
          </NavLink>
          <p className={toggleTheme ? "userAboutLight mb-0" : "userAbout mb-0"}>
            {!userOccupation
              ? "Full Stack Website Developer | JavaScript Developer | Pythoneer"
              : userOccupation}
          </p>
        </div>
        <hr className="my-1" />
        <div className="profileAnalytics">
          <div className={toggleTheme ? "profileViewsLight" : "profileViews"}>
            <p className="mb-0">Who viewed your profile</p>
            <strong>128</strong>
          </div>
          <div className={toggleTheme ? "postViewsLight" : "postViews"}>
            <p className="mb-0">views of your post</p>
            <strong>428</strong>
          </div>
        </div>
        <hr className="my-1" />
        <div className="profileAnalytics">
          <div className={toggleTheme ? "profileViewsLight" : "profileViews"}>
            <p>Try exclusive tools & insights</p>
          </div>
          <div className={toggleTheme ? "postViewsLight" : "postViews"}>
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
          className={
            toggleTheme
              ? "myItemsLight pl-3 py-3 d-flex align-items-center"
              : "myItems pl-3 py-3 d-flex align-items-center"
          }
        >
          <MdLabel style={{ fontSize: "1.1rem" }} className="mr-1" /> My Items
        </div>
      </div>
    </>
  );
};

export default UserDetails;
