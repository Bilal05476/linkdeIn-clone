import { FaHome } from "react-icons/fa";
import Logo from "../img/logo.png";
import { HiUsers } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { BsBagFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { FcAdvertising } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logoAndSearch">
        <img src={Logo} alt="logo" />
        <input type="text" placeholder="Search" />
        <FaSearch
          className="serachIcon"
          style={{ marginLeft: "-17rem", fontSize: ".8rem" }}
        />
      </div>
      <div className="headerIcons">
        <div className="icon">
          <FaHome size="1.5rem" />
          <p style={{ fontSize: ".7rem" }}>Home</p>
        </div>
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
        <div className="icon">
          <HiUserCircle size="1.5rem" />
          <p style={{ fontSize: ".7rem" }}>Me</p>
        </div>
        <div className="vertical"></div>
        <div className="icon">
          <HiDotsCircleHorizontal size="1.5rem" />
          <p style={{ fontSize: ".7rem" }}>Work</p>
        </div>
        <div className="icon">
          <FcAdvertising size="1.5rem" />
          <p style={{ fontSize: ".7rem" }}>Advertise</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
