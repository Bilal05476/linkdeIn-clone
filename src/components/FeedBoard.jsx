import "./feedBoard.css";
import NewPost from "./NewPost";
import UserDetails from "./UserDetails";

const feedBoard = () => {
  return (
    <div className="feedBoard">
      <UserDetails />
      <NewPost />
    </div>
  );
};
export default feedBoard;
