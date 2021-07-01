import { NavLink } from "react-router-dom";
import "./ViewProfile.css";
import { useStateValue } from "../StateProvider";

const ViewProfile = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <>
      <div className={toggleTheme ? "viewProfilePageLight" : "viewProfilePage"}>
        <div className="mt-5">ViewProfile</div>
        <NavLink to="/">Feed</NavLink>
      </div>
    </>
  );
};

export default ViewProfile;
