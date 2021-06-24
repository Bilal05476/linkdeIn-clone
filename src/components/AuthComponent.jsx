import React from "react";
import AuthFooter from "./AuthFooter";
import JoinNow from "./JoinNow";
import SignIn from "./SignIn";
import { Switch, Route, NavLink } from "react-router-dom";

const AuthComponent = () => {
  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <div className="welcomePage">
              <NavLink className="signBtn" to="/signIn">
                Sign In
              </NavLink>
              <NavLink className="joinBtn" to="/joinNow">
                Join Now
              </NavLink>
            </div>
          )}
        />
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/joinNow" exact component={JoinNow} />
      </Switch>
      <AuthFooter />
    </div>
  );
};

export default AuthComponent;
