import "./ViewProUserAbout.css";
import { useStateValue } from "../StateProvider";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const ViewProUserAbout = ({ userAbout }) => {
  const [userUpdAbout, setUserUpdAbout] = useState("");
  const [toggleAboutText, setToggleAboutText] = useState(false);
  const [{ toggleTheme }] = useStateValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(userUpdAbout);
  };
  return (
    <div className={toggleTheme ? "viewUserAboutLight" : "viewUserAbout"}>
      <div className="aboutHeader">
        <h5>About</h5>
        <FaRegEdit
          size="25"
          onClick={() => setToggleAboutText(!toggleAboutText)}
          style={{ cursor: "pointer" }}
        />
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
