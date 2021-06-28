import "./PostSec.css";
import { RiArrowDownSFill } from "react-icons/ri";
import PagePost from "./PagePost";
import LinkedInPost from "./LinkedInPost";
import { useStateValue } from "../StateProvider";

const PostSec = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <>
      <div className="sortSec">
        <div className={toggleTheme ? "sortingLineLight" : "sortingLine"}></div>
        <small className={toggleTheme ? "sortingTextLight" : "sortingText"}>
          Sort by:{" "}
          <strong>
            Top <RiArrowDownSFill size="20" />{" "}
          </strong>
        </small>
      </div>
      <div className="postSec">
        <LinkedInPost />
        <PagePost />
      </div>
    </>
  );
};

export default PostSec;
