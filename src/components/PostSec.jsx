import "./PostSec.css";
import { RiArrowDownSFill } from "react-icons/ri";
import PagePost from "./PagePost";
import LinkedInPost from "./LinkedInPost";

const PostSec = () => {
  return (
    <>
      <div className="sortSec">
        <div className="sortingLine"></div>
        <small className="sortingText">
          Sort by:{" "}
          <strong>
            Top <RiArrowDownSFill size="20" />{" "}
          </strong>
        </small>
      </div>
      <div className="postSec">
        <PagePost />
        <LinkedInPost />
      </div>
    </>
  );
};

export default PostSec;
