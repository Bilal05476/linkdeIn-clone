import "./NewPost.css";
import { HiPhotograph } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";

const NewPost = () => {
  return (
    <div className="newPost">
      <div className="imageInput">
        <img
          className="postProfile"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profile"
        />
        <input type="text" placeholder="Start a post" />
      </div>
      <div className="postIcons">
        <div className="photo">
          <HiPhotograph size="1.3rem" />
          <p className="mb-0 ml-1">Photo</p>
        </div>
        <div className="video">
          <FaVideo size="1.3rem" />
          <p className="mb-0 ml-1">Video</p>
        </div>
        <div className="event">
          <MdEvent size="1.3rem" />
          <p className="mb-0 ml-1">Event</p>
        </div>
        <div className="article">
          <RiArticleFill size="1.3rem" />
          <p className="mb-0 ml-1">Write article</p>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
