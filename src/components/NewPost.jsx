import "./NewPost.css";
import { HiPhotograph } from "react-icons/hi";
import { FaVideo } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { useStateValue } from "../StateProvider";
import PostModal from "./PostModal";
import { useState } from "react";

const NewPost = ({ userImage, userName, userOccupation }) => {
  const [{ toggleTheme }] = useStateValue();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={toggleTheme ? "newPostLight" : "newPost"}>
      <div className={toggleTheme ? "imageInputLight" : "imageInput"}>
        {userImage && (
          <img className="postProfile" src={userImage} alt="profile" />
        )}
        <input onClick={handleOpen} placeholder="Start a post" />
      </div>
      <PostModal
        open={open}
        setOpen={setOpen}
        userName={userName}
        userOccupation={userOccupation}
        userImage={userImage}
      />
      <div className={toggleTheme ? "postIconsLight" : "postIcons"}>
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
