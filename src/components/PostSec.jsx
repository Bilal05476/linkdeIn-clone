import "./PostSec.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import PagePost from "./PagePost";

import { useStateValue } from "../StateProvider";
import LinkedInPosts from "./LinkedInPosts";
import { useState } from "react";
import Popover from "@material-ui/core/Popover";

const PostSec = ({ userImage }) => {
  const [{ toggleTheme }] = useStateValue();
  const [sortingPost, setSortingPost] = useState("desc");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className="sortSec">
        <div className={toggleTheme ? "sortingLineLight" : "sortingLine"}></div>
        <small className={toggleTheme ? "sortingTextLight" : "sortingText"}>
          Sort by:{" "}
          <strong onClick={handleClick}>
            {sortingPost === "desc" ? "Top" : "Bottom"}{" "}
            {open ? (
              <ArrowDropUpIcon size="20" />
            ) : (
              <ArrowDropDownIcon size="20" />
            )}{" "}
          </strong>
        </small>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div
            style={{
              color: toggleTheme ? "#424242" : "#fff",
              background: toggleTheme ? "#fff" : "#424242",
              padding: "10px",
              borderRadius: "0px",
            }}
          >
            <small
              className="sortingBtn"
              onClick={() => setSortingPost("desc")}
            >
              Top
            </small>
            <br />
            <small className="sortingBtn" onClick={() => setSortingPost("asc")}>
              Bottom
            </small>
          </div>
        </Popover>
      </div>
      <div className="postSec">
        <LinkedInPosts sortingPost={sortingPost} userImage={userImage} />
        <PagePost />
      </div>
    </>
  );
};

export default PostSec;
