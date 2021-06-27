import "./CopyrightSec.css";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../img/logo.png";
import { useStateValue } from "../StateProvider";

const CopyrightSec = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <div className={toggleTheme ? "copyrightSecLight" : "copyrightSec"}>
      <div className="about">
        <small>About</small>
        <small>Accessibility</small>
        <small>Help Center</small>
      </div>
      <div className="privacy">
        <small>
          Privacy & Terms
          <IoIosArrowDown />
        </small>
        <small>Ad Choices</small>
      </div>
      <div className="advertising">
        <small>Advertising</small>
        <small>
          Business Services
          <IoIosArrowDown />
        </small>
      </div>
      <div className="copy">
        <small>
          <img src={Logo} className="mr-2" width="10%" alt="logo" />
          LinkedIn Corporation &copy; 2021
        </small>
      </div>
    </div>
  );
};

export default CopyrightSec;
