import FeedBoard from "./components/FeedBoard";
import Header from "./components/Header";
import { useStateValue } from "./StateProvider";
import AuthComponent from "./components/AuthComponent";

function App() {
  const { user } = useStateValue();
  return (
    <>
      <div>
        {!user ? (
          <AuthComponent />
        ) : (
          <>
            <Header />
            <FeedBoard />{" "}
          </>
        )}
      </div>
    </>
  );
}

export default App;
