import "./feedBoard.css";
import AddFeedSec from "./AddFeedSec";
import CopyrightSec from "./CopyrightSec";
import NewPost from "./NewPost";
import PostSec from "./PostSec";
import RecentSec from "./RecentSec";
import ServicesPage from "./ServicesPage";
import TopCourses from "./TopCourses";
import UserDetails from "./UserDetails";
import UserPage from "./UserPage";
import { useStateValue } from "../StateProvider";

const FeedBoard = () => {
  const [{ toggleTheme }] = useStateValue();
  return (
    <>
      {toggleTheme && (
        <div className="feedBoardLight">
          <div className="leftSection" style={{ width: "20%" }}>
            <UserDetails />
            <UserPage />
            <RecentSec />
          </div>
          <div className="centerSection" style={{ width: "50%" }}>
            <NewPost />
            <PostSec />
          </div>
          <div className="rightSection" style={{ width: "26%" }}>
            <AddFeedSec />
            <TopCourses />
            <ServicesPage />
            <CopyrightSec />
          </div>
        </div>
      )}
      {!toggleTheme && (
        <div className="feedBoard">
          <div className="leftSection" style={{ width: "20%" }}>
            <UserDetails />
            <UserPage />
            <RecentSec />
          </div>
          <div className="centerSection" style={{ width: "50%" }}>
            <NewPost />
            <PostSec />
          </div>
          <div className="rightSection" style={{ width: "26%" }}>
            <AddFeedSec />
            <TopCourses />
            <ServicesPage />
            <CopyrightSec />
          </div>
        </div>
      )}
    </>
  );
};
export default FeedBoard;
