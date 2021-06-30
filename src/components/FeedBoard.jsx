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
import { useEffect, useState } from "react";
import { db } from "../firebase";

const FeedBoard = () => {
  const [{ user, toggleTheme }] = useStateValue();
  const getUserData = db.collection("users").doc(user.uid);
  const [userName, setUserName] = useState("");
  const [userOccupation, setUserOccupation] = useState("");
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    return getUserData.get().then((doc) => {
      setUserName(doc.data().name);
      setUserOccupation(doc.data().occupation);
      setUserImage(doc.data().avatar);
    });
  }, [user, getUserData]);

  return (
    <>
      <div className={toggleTheme ? "feedBoardLight" : "feedBoard"}>
        <div className="leftSection" style={{ width: "20%" }}>
          <UserDetails
            userName={userName}
            userOccupation={userOccupation}
            userImage={userImage}
          />
          <UserPage />
          <RecentSec />
        </div>
        <div className="centerSection" style={{ width: "50%" }}>
          <NewPost userImage={userImage} />
          <PostSec />
        </div>
        <div className="rightSection" style={{ width: "26%" }}>
          <AddFeedSec />
          <TopCourses />
          <ServicesPage userName={userName} userImage={userImage} />
          <CopyrightSec />
        </div>
      </div>
    </>
  );
};
export default FeedBoard;
