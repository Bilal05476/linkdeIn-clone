import "./ViewProfile.css";
import { useStateValue } from "../StateProvider";
import ViewProUserDetails from "./ViewProUserDetails";

const ViewProfile = ({ userName, userOccupation, userImage }) => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <>
      <div className={toggleTheme ? "viewProfilePageLight" : "viewProfilePage"}>
        <div className="leftSection" style={{ width: "70%" }}>
          <ViewProUserDetails
            userName={userName}
            userOccupation={userOccupation}
            userImage={userImage}
          />
        </div>
        <div className="rightSection" style={{ width: "30%" }}></div>
      </div>
    </>
  );
};

export default ViewProfile;
