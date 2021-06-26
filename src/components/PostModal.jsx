import "./PostModal.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { useStateValue } from "../StateProvider";

// import { useState } from "react";

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
    alignItems: "center",
    padding: "20px 30px",
  },
  modalFooter: {
    backgroundColor: "#212121",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "20px 30px",
  },
}));

export default function PostModal({ open, setOpen }) {
  const [{ user }] = useStateValue();
  const classes = useStyles();
  const getUserData = db.collection("users").doc(user.uid);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    return getUserData.get().then((doc) => {
      setUserImage(doc.data().avatar);
    });
  }, [user, getUserData]);
  const handleClose = () => {
    setOpen(false);
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
              {userImage && (
                <img className="postProfile" src={userImage} alt="profile" />
              )}
              <p className="mb-0 nameTags">Bilal Ahmed</p>
              <p className="mb-0 nameTags">Anyone</p>
            </div>
            <div className={classes.modalFooter}>Modal Footer</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
