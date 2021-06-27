import { FiPlus } from "react-icons/fi";
import "./AddFeedSec.css";
import { useStateValue } from "../StateProvider";

const FeedDetails = ({ img, title, company }) => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <div style={{ fontSize: "0.7rem" }} className="d-flex my-3">
      <img src={img} alt="feed" className="postProfile" />
      <div>
        <h6 className="mb-0" style={{ fontSize: "0.9rem" }}>
          {title}
        </h6>
        <p className="mb-0" style={{ fontSize: "0.7rem" }}>
          {company}{" "}
        </p>
        <button className={toggleTheme ? "followBtnLight" : "followBtn"}>
          <FiPlus className="mr-1" />
          Follow
        </button>
      </div>
    </div>
  );
};

export default FeedDetails;
