import AddFeedSec from "./AddFeedSec";
import "./feedBoard.css";
import NewPost from "./NewPost";
import PostSec from "./PostSec";
import RecentSec from "./RecentSec";
import UserDetails from "./UserDetails";

const feedBoard = () => {
  return (
    <div className="feedBoard">
      <div className="leftSection" style={{ width: "20%" }}>
        <UserDetails />
        <RecentSec />
      </div>
      <div className="centerSection" style={{ width: "50%" }}>
        <NewPost />
        <PostSec />
      </div>
      <div className="rightSection" style={{ width: "26%" }}>
        <AddFeedSec />
        <RecentSec />
      </div>
    </div>
  );
};
export default feedBoard;
