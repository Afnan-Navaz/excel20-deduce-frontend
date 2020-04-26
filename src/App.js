/* eslint-disable */
// Temperorily disabling eslint to make some changes

import React, { useEffect, useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ContextProvider from "./context/context";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Alertbox from "./components/alertbox/Alertbox";
import history from "./utils/history";
import Reload from "./components/reload/Reload";
import {checkAuth} from "./auth0/http";
import { login, handleAuthentication} from "./auth0/auth0";

function App() {
  const [screen, setScreen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < window.innerHeight) {
      setScreen(false);
    }
  }, []);

  return (
    <ContextProvider>
      <Router history={history}>
        <Alertbox />
        <Switch>
          <Route exact path="/game" render={() => (
            checkAuth() ? 
            (
                screen ?
                (<React.Fragment>
                  <Navbar score={30} />
                  <Main />
                </React.Fragment>) :
                (<Reload screen={setScreen} />)
            ):
            (<Redirect to="/login" />)
          )} />
          <Route exact path="/login" render={() => login()} />
          <Route
            exact
            path="/login/callback"
            render={() => handleAuthentication()}
          />
        </Switch>
      </Router>
    </ContextProvider>
  );
}
export default App;
