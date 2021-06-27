import "./TopCourses.css";
import { TiInfoLarge } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useStateValue } from "../StateProvider";

const TopCourses = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <div className={toggleTheme ? "topCoursesLight" : "topCourses"}>
      <div className="topCourse">
        <h6 className="mb-0">Today's top courses</h6>
        <TiInfoLarge />
      </div>
      {[
        "1. Personal Training",
        "2. Artificial Intelligence",
        "3. React Web App",
      ].map((item, ind) => {
        return (
          <div className="coursesBlock mb-2" key={ind}>
            <h6
              className="mb-1"
              style={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              {item}
            </h6>
            <small>Titana Clausi</small>
          </div>
        );
      })}
      <small>
        Show more on LinkedIn Learning <FaLongArrowAltRight className="ml-2" />
      </small>
    </div>
  );
};

export default TopCourses;
