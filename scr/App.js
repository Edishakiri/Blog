import Home from "./pages/home/Home.jsx";
import Single from "./pages/single/Single.jsx";
import TopBar from "./components/topbar/TopBar";
import singlePost from "./components/singlePost/Singlepost.jsx";
import Write from "../src/pages/write/Write"
import Settings from "./pages/settings/Settings.jsx";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = true;
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
