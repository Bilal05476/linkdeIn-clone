import { FaHome } from "react-icons/fa";
import Logo from "../img/logo.png";
import { HiUsers } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { BsBagFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { FcAdvertising } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { useStateValue } from "../StateProvider";
import { IoMenuOutline } from "react-icons/io5";
import "./header.css";
import { RiArrowDownSFill } from "react-icons/ri";
import UserPopover from "./UserPopover";
import { NavLink } from "react-router-dom";

const Header = ({ userName, userImage, userOccupation }) => {
  const [{ toggleTheme }, dispatch] = useStateValue();

  const onToggleTheme = () => {
    dispatch({
      type: "DARK_THEME",
    });
  };

  return (
    <>
      <div
        className={toggleTheme ? "headerLight fixed-top" : "header fixed-top"}
      >
        <div className="logoAndSearch">
          <img src={Logo} alt="logo" />
          <input type="text" placeholder="Search" />
          <FaSearch
            className="searchIcon"
            style={{ marginLeft: "-17rem", fontSize: ".8rem" }}
          />
        </div>
        <div className="headerIcons">
          <NavLink
            to="/"
            style={{
              color: toggleTheme ? "#424242" : "#fff",
              textDecoration: "none",
            }}
          >
            <div className="icon">
              <FaHome size="1.5rem" />
              <p style={{ fontSize: ".7rem" }}>Home</p>
            </div>
          </NavLink>
          <div className="icon">
            <HiUsers size="1.5rem" />
            <p style={{ fontSize: ".7rem" }}>My Network</p>
          </div>
          <div className="icon">
            <BsBagFill size="1.5rem" />
            <p style={{ fontSize: ".7rem" }}>Jobs</p>
          </div>
          <div className="icon">
            <MdMessage size="1.5rem" />
            <p style={{ fontSize: ".7rem" }}>Messaging</p>
          </div>
          <div className="icon">
            <IoNotifications size="1.5rem" />
            <p style={{ fontSize: ".7rem" }}>Notifications</p>
          </div>
          <UserPopover
            userName={userName}
            userOccupation={userOccupation}
            userImage={userImage}
          />
          <div className="vertical"></div>
          <div className="icon">
            <HiDotsCircleHorizontal size="1.5rem" />
            <p className="d-flex" style={{ fontSize: ".7rem" }}>
              Work
              <RiArrowDownSFill size="16" />
            </p>
          </div>
          <div className="icon">
            <FcAdvertising size="1.5rem" />
            <p style={{ fontSize: ".7rem" }}>Advertise</p>
          </div>
          <div
            className={`${toggleTheme ? "darkTheme" : "lightTheme"} toolTip`}
            onClick={onToggleTheme}
          >
            <span className={toggleTheme ? "tooltipTextLight" : "tooltipText"}>
              Toggle theme
            </span>
          </div>
        </div>
        <div className="collapsableIcon">
          <div className="icon">
            <IoMenuOutline size="1.5rem" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
