import "./PostSec.css";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { CgInsights } from "react-icons/cg";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { VscLiveShare } from "react-icons/vsc";
import { useStateValue } from "../StateProvider";

const PagePost = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <div className={toggleTheme ? "pagePostLight" : "pagePost"}>
      <div className="postHeader">
        <div className="headerLeft">
          <img
            className="pageLogo"
            src="https://dynamic.brandcrowd.com/asset/logo/9971bc9b-9d51-4b42-beca-b3ffe882efcd/logo?v=637102751107770000"
            alt="profile"
          />
          <div className="pagePostInfo">
            <p className="mb-0" style={{ fontWeight: "600" }}>
              Page Name
            </p>
            <small className="follower">92,991,222 followers</small>
            <small className="status">Promoted</small>
          </div>
        </div>
        <div className="headerRight">
          <BsThreeDots />
        </div>
      </div>
      <div className="postBody">
        <p className="postCaption">
          In collaboration with the Microsoft Global BlackBelt Team, this summit
          is designed to help you ship faster, operate with ease, and scale
          confidently. 🚀
        </p>
        <img
          src="https://www.hanloncreative.com/wp-content/uploads/2017/08/social-media-timing.jpg"
          alt="media"
          className="postMedia"
        />
      </div>
      <div className="postFooter">
        <div className="reactionsIcons">
          <BiLike color="rgb(14, 118, 168)" />{" "}
          <FcLike style={{ marginLeft: "-2px" }} />{" "}
          <CgInsights color="green" style={{ marginLeft: "-2px" }} />
          <small className="ml-2">
            661 <span className="px-1">.</span> 4 comments
          </small>
        </div>
        <hr />
        <div className="actionsArea">
          <small>
            <BiLike className="actionsIcons" />
            Like
          </small>
          <small>
            <BiCommentDetail className="actionsIcons" />
            Comment
          </small>
          <small>
            <VscLiveShare className="actionsIcons" />
            Share
          </small>
          <small>
            <FiSend className="actionsIcons" />
            Send
          </small>
        </div>
      </div>
    </div>
  );
};

export default PagePost;
