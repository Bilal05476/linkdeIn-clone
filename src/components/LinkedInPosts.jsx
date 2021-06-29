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

const LinkedInPosts = () => {
  //   const [{ user, toggleTheme }] = useStateValue();
  //   const getUserData = db.collection("users").doc(user.uid);
  const getPostsData = db.collection("posts");
  //   const [userName, setUserName] = useState("");
  //   const [userOccupation, setUserOccupation] = useState("");
  //   const [userImage, setUserImage] = useState(null);
  //   const [userPosts, setUserPosts] = useState([]);

  //   useEffect(() => {
  //     return getUserData.get().then((doc) => {
  //       setUserName(doc.data().name);
  //       setUserOccupation(doc.data().occupation);
  //       setUserImage(doc.data().avatar);
  //       setUserPosts(doc.data().posts);
  //       // console.log("userPosts", userPosts);
  //     });
  //   }, [user, getUserData]);
  console.log(getPostsData);
  return (
    <>
      <div>Hello World</div>
      {/* {userPosts.map((userPost, ind) => {
        return (
          <>
            <div
              key={ind}
              className={toggleTheme ? "pagePostLight" : "pagePost"}
            >
              <div className="postHeader">
                <div className="headerLeft">
                  {userImage && (
                    <img
                      className="postProfileImg"
                      src={userImage}
                      alt="profile"
                    />
                  )}

                  <div className="pagePostInfo">
                    <p className="mb-0" style={{ fontWeight: "600" }}>
                      {userName}
                    </p>
                    <small className="follower">
                      {!userOccupation
                        ? "Full Stack Website Developer | JavaScript Developer | Pythoneer"
                        : userOccupation}
                    </small>
                    <small className="status py-1 d-flex align-items-center">
                      Just Now <span className="px-1">.</span>{" "}
                      <BiWorld size="17" />
                    </small>
                  </div>
                </div>
                <div className="headerRight">
                  <BsThreeDots />
                </div>
              </div>
              <div className="postBody">
                <p className="postCaption">{userPost.postInput}</p>
                {userPost.postMedia && (
                  <img
                    src={userPost.postMedia}
                    alt="media"
                    className="postMedia"
                  />
                )}
              </div>
              <div className="postFooter">
                <div className="reactionsIcons">
                  <BiLike color="rgb(14, 118, 168)" />{" "}
                  <FcLike style={{ marginLeft: "-2px" }} />{" "}
                  <FaRegLightbulb
                    color="goldenrod"
                    style={{ marginLeft: "-2px" }}
                  />
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
          </>
        );
      })} */}
    </>
  );
};

export default LinkedInPosts;
