import "./ViewProUserDetails.css";
import { useStateValue } from "../StateProvider";

const ViewProUserDetails = ({ userName, userOccupation, userImage }) => {
  const [{ toggleTheme }] = useStateValue();

  return (
    <div
      className={toggleTheme ? "ViewProUserDetailsLight" : "ViewProUserDetails"}
    >
      {userName}
      {userOccupation}
    </div>
  );
};

export default ViewProUserDetails;
