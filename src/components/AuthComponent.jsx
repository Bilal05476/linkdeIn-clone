import { useState } from "react";
import AuthFooter from "./AuthFooter";
import JoinNow from "./JoinNow";
import SignIn from "./SignIn";
import ReactCardFlip from "react-card-flip";
import { useStateValue } from "../StateProvider";

const AuthComponent = () => {
  const [{ toggleTheme }] = useStateValue();
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className={toggleTheme ? "authComponentLight" : "authComponent"}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <SignIn isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
        <JoinNow isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      </ReactCardFlip>
      <AuthFooter />
    </div>
  );
};

export default AuthComponent;
