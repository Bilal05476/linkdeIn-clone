import "./PostSec.css";
import { RiArrowDownSFill } from "react-icons/ri";
import PagePost from "./PagePost";
// import LinkedInPost from "./LinkedInPost";
import { useStateValue } from "../StateProvider";
import LinkedInPosts from "./LinkedInPosts";
import { useState } from "react";

const PostSec = () => {
  const [{ toggleTheme }] = useStateValue();
  const [sortingPost, setSortingPost] = useState("");
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
        <LinkedInPosts />
        <PagePost />
      </div>
    </>
  );
};

export default PostSec;
