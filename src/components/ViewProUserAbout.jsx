import "./ViewProUserAbout.css";
import { useStateValue } from "../StateProvider";
import { useState } from "react";

const ViewProUserAbout = ({ userAbout }) => {
  const [userUpdAbout, setUserUpdAbout] = useState("");
  const [toggleAboutText, setToggleAboutText] = useState(false);
  const [{ toggleTheme }] = useStateValue();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={toggleTheme ? "viewUserAboutLight" : "viewUserAbout"}>
      <div>
        <h5>About</h5>
      </div>
      {toggleAboutText && (
        <>
          <textarea
            className="aboutTextArea"
            style={{ color: toggleTheme ? "#424242" : "#fff" }}
            type="text"
            rows="4"
            placeholder="Update your about..."
            required
          ></textarea>
          <button onClick={handleSubmit}>Update</button>
        </>
      )}

      <p className="m-0">{userAbout}</p>
    </div>
  );
};

export default ViewProUserAbout;
