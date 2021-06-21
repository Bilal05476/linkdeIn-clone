import AddFeedSec from "./AddFeedSec";
import "./feedBoard.css";
import NewPost from "./NewPost";
import UserDetails from "./UserDetails";

const feedBoard = () => {
  return (
    <div className="feedBoard">
      <UserDetails />
      <NewPost />
      <AddFeedSec />
    </div>
  );
};
export default feedBoard;
