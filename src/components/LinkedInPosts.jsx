import "./PostSec.css";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { VscLiveShare } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import moment from "moment";
import "./PostDeleteModal.css";
import firebase from "firebase";

const LinkedInPosts = ({ sortingPost }) => {
  const [linkedInPosts, setLinkedInPost] = useState([]);
  const getPostFromDatabase = db.collection("posts");
  const [deletePostId, setDeletePostId] = useState("");

  const [{ toggleTheme, user }] = useStateValue();
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

  const userIdForDeletePost = user.uid.toString();

  return (
    <>
      {linkedInPosts.map((linkedInPost, ind) => {
        const { data } = linkedInPost;
        const incrementLike = firebase.firestore.FieldValue.increment(+1);
        const onLikePost = (id) => {
          const getPostData = db.collection("posts").doc(id);
          getPostData.update({
            postLikeCount: incrementLike,
          });
        };

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
                {userIdForDeletePost === data.id ? (
                  <BsThreeDots
                    data-target="#deleteModal"
                    data-toggle="modal"
                    type="button"
                    onClick={() => setDeletePostId(linkedInPost.id)}
                  />
                ) : (
                  ""
                )}
                {/* deleteModal */}
                <div
                  className="modal fade"
                  id="deleteModal"
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div
                        className="modal-header"
                        style={{
                          background: toggleTheme ? "#fff" : "#424242",
                        }}
                      >
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          style={{
                            outline: "none !important",
                          }}
                        >
                          <FaTimes color={toggleTheme ? "#424242" : "#fff"} />
                        </button>
                      </div>
                      <div
                        className="modal-body"
                        style={{
                          background: toggleTheme ? "#fff" : "#424242",
                        }}
                      >
                        <div className="alertImage">
                          <FaTimes className="alertIcon" />
                        </div>
                        <p className="mb-0">
                          Do you really want to delete this post? this process
                          cannot be undone.
                        </p>
                        <div>
                          <button
                            type="button"
                            className="btn btn-secondary mx-1 cancelBtn"
                            data-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => onDeletePost(deletePostId)}
                            type="button"
                            className="mx-1 btn deleteBtn"
                            data-dismiss="modal"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  {data.postLikeCount} <span className="px-1">.</span> 14
                  comments
                </small>
              </div>
              <hr />
              <div className="actionsArea">
                <small onClick={() => onLikePost(linkedInPost.id)}>
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
