import "./PostSec.css";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { VscLiveShare } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const LinkedInPost = () => {
  const [{ user }] = useStateValue();
  const getUserData = db.collection("users").doc(user.uid);
  const [userName, setUserName] = useState("");
  const [userOccupation, setUserOccupation] = useState("");

  useEffect(() => {
    return getUserData.get().then((doc) => {
      setUserName(doc.data().name);
      setUserOccupation(doc.data().occupation);
    });
  }, [user, getUserData]);
  return (
    <div className="pagePost">
      <div className="postHeader">
        <div className="headerLeft">
          <img className="postProfileImg" src={user?.photoURL} alt="profile" />
          <div className="pagePostInfo">
            <p className="mb-0" style={{ fontWeight: "600" }}>
              {userName}
              {user?.displayName}
            </p>
            <small className="follower">
              {!userOccupation
                ? "Full Stack Website Developer | JavaScript Developer | Pythoneer"
                : userOccupation}
            </small>
            <small className="status py-1 d-flex align-items-center">
              2h <span className="px-1">.</span> <BiWorld size="17" />
            </small>
          </div>
        </div>
        <div className="headerRight">
          <BsThreeDots />
        </div>
      </div>
      <div className="postBody">
        <p className="postCaption">
          It was about 1.5 years ago, I applied somewhere for a job.
          <br />
          <br /> My resume got rejected at the first stage. I didn't even get
          any reply from them about that.. 🙂
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBj5fzx7tOJyLPXfby43X_oaz6C-_XITaEw&usqp=CAU"
          alt="media"
          className="postMedia"
        />
      </div>
      <div className="postFooter">
        <div className="reactionsIcons">
          <BiLike color="rgb(14, 118, 168)" />{" "}
          <FcLike style={{ marginLeft: "-2px" }} />{" "}
          <FaRegLightbulb color="goldenrod" style={{ marginLeft: "-2px" }} />
          <small className="ml-2">
            61 <span className="px-1">.</span> 14 comments
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

export default LinkedInPost;
