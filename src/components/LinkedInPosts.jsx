import "./PostSec.css";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { VscLiveShare } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { CgInsights } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";
import { RiHeartsFill } from "react-icons/ri";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import moment from "moment";
import "./PostDeleteModal.css";
import firebase from "firebase";
import Popover from "@material-ui/core/Popover";

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
  //allow user to delete only his posts
  const userIdForDeletePost = user.uid.toString();

  // Reaction Popover functions & state
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
      {linkedInPosts.map((linkedInPost, ind) => {
        const { data } = linkedInPost;
        const incrementReaction = firebase.firestore.FieldValue.increment(+1);
        const onLikePost = (id) => {
          console.log(id)
          // const getPostData = getPostFromDatabase.doc(id);
          // getPostData.update({
          //   postLikeCount: incrementReaction,
          // });
        };
        const onLovePost = (id) => {
          console.log(id)
          // const getPostData = getPostFromDatabase.doc(id);
          // getPostData.update({
          //   postLoveCount: incrementReaction,
          // });
        };
        const onSupportPost = (id) => {
          console.log(id)
          // const getPostData = getPostFromDatabase.doc(id);
          // getPostData.update({
          //   postSupCount: incrementReaction,
          // });
        };
        const onInsightPost = (id) => {
          console.log(id)
          // const getPostData = getPostFromDatabase.doc(id);
          // getPostData.update({
          //   postInsCount: incrementReaction,
          // });
        };

        const postDate = moment(data.postTime.toDate().toString()).fromNow();

        const postReactionCount =
          data.postLikeCount +
          data.postLoveCount +
          data.postInsCount +
          data.postSupCount;

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
                {data.postLikeCount > 0 && <BiLike color="rgb(18, 145, 204)" />}
                {data.postLoveCount > 0 && (
                  <AiFillHeart
                    color="rgb(202, 17, 64)"
                    style={{ marginLeft: "-4px" }}
                  />
                )}
                {data.postSupCount > 0 && (
                  <RiHeartsFill
                    color="rgb(35, 214, 18)"
                    style={{ marginLeft: "-4px" }}
                  />
                )}
                {data.postInsCount > 0 && (
                  <CgInsights
                    color="rgb(226, 230, 22)"
                    style={{ marginLeft: "-4px" }}
                  />
                )}
                <small className="ml-1">
                  {postReactionCount} <span className="px-1">.</span> 0 comments
                </small>
              </div>
              <hr />
              <div className="actionsArea">
                {/* Like Popover */}
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
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
                    <BiLike
                      color="rgb(18, 145, 204)"
                      onClick={() => onLikePost(linkedInPost.id)}
                      style={{
                        marginLeft: "3px",
                        fontSize: "2rem",
                        cursor: "pointer",
                      }}
                    />
                    <AiFillHeart
                      color="rgb(202, 17, 64)"
                      onClick={() => onLovePost(linkedInPost.id)}
                      style={{
                        marginLeft: "3px",
                        fontSize: "2rem",
                        cursor: "pointer",
                      }}
                    />
                    <RiHeartsFill
                      color="rgb(35, 214, 18)"
                      onClick={() => onSupportPost(linkedInPost.id)}
                      style={{
                        marginLeft: "3px",
                        fontSize: "2rem",
                        cursor: "pointer",
                      }}
                    />
                    <CgInsights
                      color="rgb(226, 230, 22)"
                      onClick={() => onInsightPost(linkedInPost.id)}
                      style={{
                        marginLeft: "3px",
                        fontSize: "2rem",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </Popover>

                <small onClick={handleClick}>
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
