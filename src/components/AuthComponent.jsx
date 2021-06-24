import { useState } from "react";
import AuthFooter from "./AuthFooter";
import JoinNow from "./JoinNow";
import SignIn from "./SignIn";
import ReactCardFlip from "react-card-flip";

const AuthComponent = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="authComponent">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <SignIn isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
        <JoinNow isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      </ReactCardFlip>
      <AuthFooter />
    </div>
  );
};

export default AuthComponent;
