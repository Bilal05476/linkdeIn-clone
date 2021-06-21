import AddFeedSec from "./AddFeedSec";
import "./feedBoard.css";
import NewPost from "./NewPost";
import RecentSec from "./RecentSec";
import UserDetails from "./UserDetails";

const feedBoard = () => {
  return (
    <div className="feedBoard">
      <div className="" style={{ width: "20%" }}>
        <UserDetails />
        <RecentSec />
      </div>
      <div className="" style={{ width: "50%" }}>
        <NewPost />
        <RecentSec />
      </div>
      <div className="" style={{ width: "25%" }}>
        <AddFeedSec />
        <RecentSec />
      </div>
    </div>
  );
};
export default feedBoard;
