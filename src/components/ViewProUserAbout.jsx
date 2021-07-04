import "./ViewProUserAbout.css";
import { useStateValue } from "../StateProvider";
import { useState } from "react";
import { db } from "../firebase";
import { FaRegEdit } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const ViewProUserAbout = ({ userAbout, setUserAbout }) => {
  const [userUpdAbout, setUserUpdAbout] = useState("");
  const [toggleAboutText, setToggleAboutText] = useState(false);
  const [{ toggleTheme, user }] = useStateValue();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const getUserData = db.collection("users").doc(user.uid);
      await getUserData.update({
        about: userUpdAbout,
      });
      await getUserData.get().then((doc) => {
        setUserAbout(doc.data().about);
      });
      setUserUpdAbout("");
    }
  };

  return (
    <div className={toggleTheme ? "viewUserAboutLight" : "viewUserAbout"}>
      <div className="aboutHeader">
        <h5>About</h5>
        {toggleAboutText ? (
          <FaTimes
            size="25"
            onClick={() => setToggleAboutText(false)}
            style={{ cursor: "pointer", color: "crimson" }}
          />
        ) : (
          <FaRegEdit
            size="25"
            onClick={() => setToggleAboutText(true)}
            style={{ cursor: "pointer", color: "rgb(19, 180, 255)" }}
          />
        )}
      </div>
      {toggleAboutText && (
        <>
          <textarea
            className="aboutTextArea"
            style={{ color: toggleTheme ? "#424242" : "#fff" }}
            type="text"
            rows="4"
            value={userUpdAbout}
            onChange={(e) => setUserUpdAbout(e.target.value)}
            placeholder="Update your about..."
            required
          ></textarea>
          <button className="aboutTextBtn" onClick={handleSubmit}>
            Update
          </button>
        </>
      )}

      <p className="m-0">{userAbout}</p>
    </div>
  );
};

export default ViewProUserAbout;
