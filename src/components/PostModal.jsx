import "./PostModal.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { useStateValue } from "../StateProvider";
import { HiPhotograph } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    backgroundColor: "#212121",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "40%",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 40px",
    paddingRight: "20px",
    width: "100%",
    borderBottom: "1px solid #585858",
  },
  modalBody: {
    backgroundColor: "#212121",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  modalBodyHeader: {
    backgroundColor: "#212121",
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  modalInput: {
    background: "transparent",
    outline: "none",
    border: "none",
    color: "#fff",
    padding: "10px",
    overflowY: "auto",
  },
  modalFooter: {
    backgroundColor: "#212121",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 30px",
    paddingBottom: "15px",
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
}));

export default function PostModal({ open, setOpen }) {
  const [{ user }] = useStateValue();
  const classes = useStyles();
  const getUserData = db.collection("users").doc(user.uid);
  const [userImage, setUserImage] = useState(null);
  const [postInput, setPostInput] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    return getUserData.get().then((doc) => {
      setUserImage(doc.data().avatar);
      setUserName(doc.data().name);
    });
  }, [user, getUserData]);
  const handleClose = () => {
    setOpen(false);
  };

  const onAdd = (hash) => {
    setPostInput(hash);
    console.log(postInput);
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
          <div className={classes.paper}>
            <div className={classes.modalHeader}>
              <h4 className="m-0" style={{ fontWeight: "300" }}>
                Create a post
              </h4>
              <button className="modalCloseBtn" onClick={handleClose}>
                <GrClose size="18" />
              </button>
            </div>
            <div className={classes.modalBody}>
              <div className={classes.modalBodyHeader}>
                {userImage && (
                  <img className="postProfile" src={userImage} alt="profile" />
                )}
                <p className="mb-0 nameTags">
                  <HiUsers size="1.2rem" className="mr-2" /> {userName}
                </p>
                <p className="mb-0 nameTags">
                  <BiWorld size="1.2rem" className="mr-2" />
                  Anyone
                </p>
              </div>
              <textarea
                className={classes.modalInput}
                type="text"
                rows="4"
                value={postInput}
                placeholder="What do you want to talk about?"
              ></textarea>
              <button
                onClick={() => onAdd("#")}
                className={`${classes.modalHashBtn} modalHashBtn`}
              >
                Add hashtag
              </button>
            </div>
            <div className={classes.modalFooter}>
              <div className={classes.modalLeftFooter}>
                <AiOutlinePlus size="1.3rem" />{" "}
                <HiPhotograph className="mx-2" size="1.3rem" />{" "}
                <FaVideo size="1.3rem" />
                <div
                  className="mx-4"
                  style={{ width: "1px", height: "20px", background: "#333" }}
                ></div>
                <p className="mb-0 nameTags">
                  <BiCommentDetail size="1.2rem" className="mr-2" />
                  Anyone
                </p>
              </div>
              <div className={classes.modalRightFooter}>
                <button className={classes.postSubmitBtn}>Post</button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
