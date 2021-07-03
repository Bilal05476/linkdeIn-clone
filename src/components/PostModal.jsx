import "./PostModal.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { db, storage } from "../firebase";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useStateValue } from "../StateProvider";
import { HiPhotograph } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
// import EmojiComponent from "./EmojiComponent";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: "10px",
    backgroundColor: "#212121",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "40%",
    border: "1px solid rgb(128, 128, 128)",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 40px",
    paddingRight: "20px",
    width: "100%",
  },
  modalBody: {
    // color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  modalBodyHeader: {
    // color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  modalInput: {
    background: "transparent",
    outline: "none",
    border: "none",
    // color: "#fff",
    padding: "10px",
    overflowY: "auto",
  },
  modalFooter: {
    // color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 30px",
    paddingBottom: "15px",
    borderRadius: "10px",
  },

  modalLeftFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postSubmitBtn: {
    background: "rgb(19, 180, 255)",
    padding: "5px 15px",
    color: "#fff",
    border: "none",
    outline: "none !important",
    borderRadius: "20px",
  },
  postDisabledBtn: {
    background: "#424242",
    padding: "5px 15px",
    color: "#fff",
    border: "none",
    outline: "none !important",
    borderRadius: "20px",
  },
  modalHashBtn: {
    color: "rgb(19, 180, 255)",
    width: "20%",
    background: "transparent",
    fontSize: "0.8rem",
    outline: "none !important",
    border: "none",
    fontWeight: "400",
    padding: "5px 2px",
  },
  modalRightFooter: {
    display: "flex",
  },
}));

export default function PostModal({
  open,
  setOpen,
  userName,
  userImage,
  userOccupation,
}) {
  const [{ user, toggleTheme }] = useStateValue();
  const getUserData = db.collection("users").doc(user.uid);
  const classes = useStyles();
  const setUserPost = db.collection("posts");
  const [postInput, setPostInput] = useState("");
  const [postMedia, setPostMedia] = useState("");
  const [userNewPost, setUserNewPost] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const onMediaChange = async (e) => {
    const media = e.target.files[0];
    const storageRef = storage.ref();
    const mediaRef = await storageRef.child(media.name);
    await mediaRef.put(media);
    setPostMedia(await mediaRef.getDownloadURL());
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    await setUserPost.add({
      name: userName,
      avatar: userImage,
      occupation: userOccupation,
      postInput: postInput,
      postMedia: postMedia,
      postTime: firebase.firestore.Timestamp.fromDate(new Date()),
    });
    userNewPost.push({ postInput, postMedia });
    await getUserData
      .update({
        posts: userNewPost,
      })
      .then(() => {
        console.log("Your post has been added👍");
        setPostInput("");
        setPostMedia("");
      })
      .catch((error) => {
        alert(error.message);
        alert(`Error! ${error}`);
      });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={`${toggleTheme ? "paperLight" : classes.paper}`}>
            <div
              className={classes.modalHeader}
              style={{
                borderBottom: toggleTheme
                  ? "1px solid #ccc"
                  : "1px solid #585858",
              }}
            >
              <h4 className="m-0" style={{ fontWeight: "300" }}>
                Create a post
              </h4>
              <button
                className={toggleTheme ? "modalCloseBtnLight" : "modalCloseBtn"}
                onClick={handleClose}
              >
                <GrClose size="18" />
              </button>
            </div>
            <div
              className={classes.modalBody}
              style={{ color: toggleTheme ? "#424242" : "#fff" }}
            >
              <div
                className={classes.modalBodyHeader}
                style={{ color: toggleTheme ? "#424242" : "#fff" }}
              >
                {userImage && (
                  <img className="postProfile" src={userImage} alt="profile" />
                )}
                <p
                  className={
                    toggleTheme ? "mb-0 nameTagsLight" : "mb-0 nameTags"
                  }
                >
                  <HiUsers size="1.2rem" className="mr-2" /> {userName}
                </p>
                <p
                  className={
                    toggleTheme ? "mb-0 nameTagsLight" : "mb-0 nameTags"
                  }
                >
                  <BiWorld size="1.2rem" className="mr-2" />
                  Anyone
                </p>
              </div>
              <textarea
                className={classes.modalInput}
                style={{ color: toggleTheme ? "#424242" : "#fff" }}
                type="text"
                rows="4"
                value={postInput}
                onChange={(e) => setPostInput(e.target.value)}
                placeholder="What do you want to talk about?"
              ></textarea>
              {postMedia && (
                <img
                  src={postMedia}
                  alt=" "
                  width="100%"
                  height="200px"
                  className={postMedia ? "mb-2" : "m-0"}
                />
              )}
              <button className={`${classes.modalHashBtn} modalHashBtn`}>
                Add hashtag
              </button>
            </div>
            <div
              className={classes.modalFooter}
              style={{ color: toggleTheme ? "#424242" : "#fff" }}
            >
              <div className={classes.modalLeftFooter}>
                <AiOutlinePlus size="1.3rem" />{" "}
                <div className="mediaUpload">
                  <label htmlFor="file-input">
                    <HiPhotograph className="mx-2" size="1.3rem" />
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    onChange={onMediaChange}
                    accept="image/*"
                  />{" "}
                </div>
                <div className="mediaUpload">
                  <label htmlFor="file-input">
                    <FaVideo size="1.3rem" />
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    onChange={onMediaChange}
                    accept="image/*"
                  />{" "}
                </div>
                <div
                  className="mx-4"
                  style={{
                    width: "1px",
                    height: "20px",
                    background: toggleTheme ? "#ccc" : "#333",
                  }}
                ></div>
                <p
                  className={
                    toggleTheme ? "mb-0 nameTagsLight" : "mb-0 nameTags"
                  }
                >
                  <BiCommentDetail size="1.2rem" className="mr-2" />
                  Anyone
                </p>
              </div>
              <div className={classes.modalRightFooter}>
                {!postMedia || !postInput ? (
                  <p className={`${classes.postDisabledBtn} mb-0`}>Post</p>
                ) : (
                  <button
                    onClick={onHandleSubmit}
                    className={classes.postSubmitBtn}
                  >
                    Post
                  </button>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
