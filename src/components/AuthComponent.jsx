import React from "react";
import AuthFooter from "./AuthFooter";
import JoinNow from "./JoinNow";
// import SignIn from "./SignIn";

const AuthComponent = () => {
  return (
    <div>
      {/* <SignIn /> */}
      <JoinNow />
      <AuthFooter />
    </div>
  );
};

export default AuthComponent;
