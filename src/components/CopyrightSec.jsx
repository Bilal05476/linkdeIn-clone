import "./CopyrightSec.css";
import { GrLinkedin } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

const CopyrightSec = () => {
  return (
    <div className="copyrightSec">
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
          <GrLinkedin size="18" className="mr-1" color="rgb(14, 118, 168)" />
          LinkedIn Corporation &copy; 2021
        </small>
      </div>
    </div>
  );
};

export default CopyrightSec;
