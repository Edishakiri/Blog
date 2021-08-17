import Home from "./pages/home/Home.jsx";
import Single from "./pages/single/Single.jsx";
import TopBar from "./components/topbar/TopBar";

import Write from "../src/pages/write/Write"
import Settings from "./pages/settings/Settings.jsx";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context.js";

function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <TopBar />
      <Switch>
         <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/write">
            {user ? <Write /> : <Register />}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
