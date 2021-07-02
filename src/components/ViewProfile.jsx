import "./ViewProfile.css";
import { useStateValue } from "../StateProvider";
import ViewProUserDetails from "./ViewProUserDetails";
import AddFeedSec from "./AddFeedSec";
import TopCourses from "./TopCourses";
import ServicesPage from "./ServicesPage";
import CopyrightSec from "./CopyrightSec";

const ViewProfile = ({
  userName,
  userOccupation,
  userImage,
  userCountry,
  userCity,
}) => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <>
      <div className={toggleTheme ? "viewProfilePageLight" : "viewProfilePage"}>
        <div
          className="leftSection"
          style={{ width: "70%", marginRight: "20px" }}
        >
          <ViewProUserDetails
            userName={userName}
            userOccupation={userOccupation}
            userImage={userImage}
            userCity={userCity}
            userCountry={userCountry}
          />
        </div>
        <div className="rightSection" style={{ width: "26%" }}>
          <AddFeedSec />
          <TopCourses />
          <ServicesPage userName={userName} userImage={userImage} />
          <CopyrightSec />
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
