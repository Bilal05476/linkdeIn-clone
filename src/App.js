import FeedBoard from "./components/FeedBoard";
import Header from "./components/Header";
import { useStateValue } from "./StateProvider";
import AuthComponent from "./components/AuthComponent";

function App() {
  const [{ user }] = useStateValue();
  return (
    <>
      <div className="largeScreen">
        {!user ? (
          <AuthComponent />
        ) : (
          <>
            <Header />
            <FeedBoard />
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
