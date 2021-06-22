import "./PostSec.css";
import { RiArrowDownSFill } from "react-icons/ri";
import PagePost from "./PagePost";

const PostSec = () => {
  return (
    <>
      <div className="sortSec">
        <div className="sortingLine"></div>
        <small>
          Sort by:{" "}
          <strong>
            Top <RiArrowDownSFill size="20" />{" "}
          </strong>
        </small>
      </div>
      <div className="postSec">
        <PagePost />
      </div>
    </>
  );
};

export default PostSec;
