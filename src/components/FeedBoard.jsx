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
import UserPopover from "./UserPopover";

const feedBoard = () => {
  return (
    <div className="feedBoard">
      <div className="leftSection" style={{ width: "20%" }}>
        <UserDetails />
        <UserPage />
        <RecentSec />
        <UserPopover />
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
  );
};
export default feedBoard;
