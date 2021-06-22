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
          src="https://media-exp1.licdn.com/dms/image/C5603AQEQl3TdXRZAxQ/profile-displayphoto-shrink_100_100/0/1561463236720?e=1629936000&v=beta&t=s-fGyByCn8y7cn8DnUjlwactRwosFBXbA-4SbQrcILs"
          alt="profile"
        />
        <input type="text" placeholder="Start a post" />
      </div>
      <div className="postIcons">
        <div className="photo">
          <HiPhotograph color="rgb(14, 118, 168)" size="1.3rem" />
          <p className="mb-0 ml-1">Photo</p>
        </div>
        <div className="video">
          <FaVideo color="rgb(14, 168, 109)" size="1.3rem" />
          <p className="mb-0 ml-1">Video</p>
        </div>
        <div className="event">
          <MdEvent color="rgb(165, 168, 14)" size="1.3rem" />
          <p className="mb-0 ml-1">Event</p>
        </div>
        <div className="article">
          <RiArticleFill color="rgb(168, 14, 52)" size="1.3rem" />
          <p className="mb-0 ml-1">Write article</p>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
