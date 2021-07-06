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
import moment from "moment";

const LinkedInPosts = ({ sortingPost }) => {
  const [linkedInPosts, setLinkedInPost] = useState([]);
  const getPostFromDatabase = db.collection("posts");

  const [{ toggleTheme }] = useStateValue();
  useEffect(() => {
    getPostFromDatabase
      .orderBy("postTime", `${sortingPost}`)
      .onSnapshot((snapshot) =>
        setLinkedInPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [sortingPost]);

  const onDeletePost = (id) => {
    getPostFromDatabase.doc(id).delete();
  };

  return (
    <>
      {linkedInPosts.map((linkedInPost, ind) => {
        const { data } = linkedInPost;

        const postDate = moment(data.postTime.toDate().toString()).fromNow();

        return (
          <div key={ind} className={toggleTheme ? "pagePostLight" : "pagePost"}>
            <div className="postHeader">
              <div className="headerLeft">
                {data.avatar && (
                  <img
                    className="postProfileImg"
                    src={data.avatar}
                    alt="profile"
                  />
                )}

                <div className="pagePostInfo">
                  <p className="mb-0" style={{ fontWeight: "600" }}>
                    {data.name}
                  </p>
                  <small className="follower">
                    {!data.occupation
                      ? "Full Stack Website Developer | JavaScript Developer | Pythoneer"
                      : data.occupation}
                  </small>
                  <small className="status py-1 d-flex align-items-center">
                    {postDate}
                    <span className="px-1">.</span> <BiWorld size="17" />
                  </small>
                </div>
              </div>
              <div className="headerRight">
                <BsThreeDots onClick={() => onDeletePost(linkedInPost.id)} />
              </div>
            </div>
            <div className="postBody">
              <p className="postCaption">{data.postInput}</p>
              {data.postMedia && (
                <img src={data.postMedia} alt="media" className="postMedia" />
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
        );
      })}
    </>
  );
};

export default LinkedInPosts;
