import FeedBoard from "./components/FeedBoard";
import Header from "./components/Header";
import { useStateValue } from "./StateProvider";
import AuthComponent from "./components/AuthComponent";
import { useState } from "react";
import { db } from "./firebase";
import ViewProfile from "./components/ViewProfile";
import { Switch, Route } from "react-router-dom";

function App() {
  const [{ user }] = useStateValue();
  const [userName, setUserName] = useState("");
  const [userOccupation, setUserOccupation] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userAbout, setUserAbout] = useState("");
  const [userImage, setUserImage] = useState(null);

  if (user) {
    const getUserData = db.collection("users").doc(user.uid);
    getUserData.get().then((doc) => {
      setUserName(doc.data().name);
      setUserOccupation(doc.data().occupation);
      setUserImage(doc.data().avatar);
      setUserCountry(doc.data().country);
      setUserCity(doc.data().city);
      setUserAbout(doc.data().about);
    });
  }
  return (
    <>
      <div className="largeScreen">
        <Switch>
          <Route exact path="/">
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
          </Route>
          <Route exact path="/:path">
            <Header
              userName={userName}
              userOccupation={userOccupation}
              userImage={userImage}
            />
            <ViewProfile
              userName={userName}
              userOccupation={userOccupation}
              userImage={userImage}
              userCity={userCity}
              userCountry={userCountry}
              userAbout={userAbout}
            />
          </Route>
        </Switch>
      </div>
      <div className="shortScreen">
        Please Open LinkedIn Clone on Large Screen Size as Small or Medium
        Screen View is under Developement !! Thank you 🙂{" "}
      </div>
    </>
  );
}

export default App;
