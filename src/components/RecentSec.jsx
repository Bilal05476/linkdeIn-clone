import "./RecentSec.css";
import { FaHashtag } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const RecentSec = () => {
  return (
    <div className="recentSec">
      <div className="recent mb-3">
        <h6>Recent</h6>
        <small className="d-flex align-items-center  mb-2">
          <FaHashtag className="mr-2" /> proSoft
        </small>
        <small className="d-flex align-items-center  mb-2">
          <FaHashtag className="mr-2" />
          mubSays
        </small>
        <small className="d-flex align-items-center  mb-2">
          <FaLayerGroup className="mr-2" />
          Full Stack Developer
        </small>
        <small className="d-flex align-items-center  mb-2">
          <FaHashtag className="mr-2" />
          JSWorld
        </small>
      </div>
      <div className="groups">
        <h6 style={{ color: "rgb(14, 118, 168)" }}>Groups</h6>
        <div className="group">
          <small className="d-flex align-items-center mb-2">
            <FaLayerGroup className="mr-2" />
            Full-stack web developer
          </small>
          <small className="d-flex align-items-center mb-2">
            <FaLayerGroup className="mr-2" />
            Web Designer and UI Developer
          </small>
          <small className="d-flex align-items-center mb-2">
            <FaLayerGroup className="mr-2" />
            Freelancer Graphics Designer
          </small>
          <small className="d-flex align-items-center ml-3">
            Show more <IoIosArrowDown className="ml-2" />{" "}
          </small>
        </div>
      </div>
      <div className="events">
        <div className="event mb-3">
          <h6 className="mb-0 mr-2" style={{ color: "rgb(14, 118, 168)" }}>
            Events
          </h6>
          <FiPlus />
        </div>
        <h6 style={{ color: "rgb(14, 118, 168)" }}>Follow Hashtags</h6>
        <div className="tags">
          <small className="d-flex align-items-center mb-2">
            <FaHashtag className="mr-2" />
            proSoft
          </small>
          <small className="d-flex align-items-center mb-2">
            <FaHashtag className="mr-2" />
            mubSays
          </small>
          <small className="d-flex align-items-center mb-2">
            <FaHashtag className="mr-2" />
            mongodb
          </small>
          <small className="d-flex align-items-center ml-3">
            Show more <IoIosArrowDown className="ml-2" />{" "}
          </small>
        </div>
      </div>
      <hr className="mb-0" />
      <div className="discover text-center py-3">Discover more</div>
    </div>
  );
};

export default RecentSec;
