import "./EditAndProDetails.css";
import { useStateValue } from "../StateProvider";
import { NavLink } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";

const EditAndProDetails = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <div className={toggleTheme ? "editAndProLight" : "editAndPro"}>
      <div className="editUserProfile">
        <NavLink to="/" style={{ color: toggleTheme ? "#424242" : "#ccc" }}>
          <p className="m-0">Edit public profile & URL</p>
        </NavLink>
        <AiFillQuestionCircle />
      </div>
      <hr />
      <div className="addUserProfile">
        <NavLink to="/" style={{ color: toggleTheme ? "#424242" : "#ccc" }}>
          <p className="m-0">Add profile in another language</p>
        </NavLink>
        <AiFillQuestionCircle />
      </div>
    </div>
  );
};
export default EditAndProDetails;
