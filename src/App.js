import FeedBoard from "./components/FeedBoard";
import Header from "./components/Header";
import { useStateValue } from "./StateProvider";
import AuthComponent from "./components/AuthComponent";
import { useEffect, useState } from "react";
import { db } from "./firebase";

function App() {
  const [{ user }] = useStateValue();
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
      <div className="largeScreen">
        {!user ? (
          <AuthComponent />
        ) : (
          <>
            <Header
              userName={userName}
              userOccupation={userOccupation}
              userImage={userImage}
            />
            <FeedBoard
              userName={userName}
              userOccupation={userOccupation}
              userImage={userImage}
            />
          </>
        )}
      </div>
      <div className="shortScreen">
        Please Open LinkedIn Clone on Large Screen Size as Small or Medium
        Screen View is under Developement !! Thank you 🙂{" "}
      </div>
    </>
  );
}

export default App;
