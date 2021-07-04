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
  const [blankText, setBlankText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user && userUpdAbout !== "") {
      const getUserData = db.collection("users").doc(user.uid);
      await getUserData.update({
        about: userUpdAbout,
      });
      await getUserData.get().then((doc) => {
        setUserAbout(doc.data().about);
      });
      setUserUpdAbout("");
      setBlankText("");
    } else if (userUpdAbout === "") {
      setBlankText("Type something please...");
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
          {blankText && (
            <div
              style={{
                background: "pink",
                color: "crimson",
                padding: "2px 15px",
                border: "1px solid crimson",
                borderRadius: "10px",
              }}
            >
              {blankText}
            </div>
          )}
          <textarea
            className="aboutTextArea"
            style={{ color: toggleTheme ? "#424242" : "#fff" }}
            type="text"
            rows="4"
            value={userUpdAbout}
            onChange={(e) => setUserUpdAbout(e.target.value)}
            placeholder="Update your about..."
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
