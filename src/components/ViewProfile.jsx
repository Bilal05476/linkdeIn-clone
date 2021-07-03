import "./ViewProfile.css";
import { useStateValue } from "../StateProvider";
import ViewProUserDetails from "./ViewProUserDetails";
import PeopleAlsoViewed from "./PeopleAlsoViewed";
import ServicesPage from "./ServicesPage";
import CopyrightSec from "./CopyrightSec";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import EditAndProDetails from "./EditAndProDetails";
import ViewProUserAbout from "./ViewProUserAbout";

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
          <ViewProUserAbout />
        </div>
        <div className="rightSection" style={{ width: "26%" }}>
          <EditAndProDetails />
          <ServicesPage userName={userName} userImage={userImage} />
          <PeopleAlsoViewed />
          <PeopleYouMayKnow />
          <CopyrightSec />
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
