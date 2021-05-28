import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import Profile from "./pages/Profile";

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem("access_token")) {
      if (to.location.pathname === "/auth") {
        next.redirect("/profile");
      } else {
        next();
      }
    } else {
      if (to.location.pathname) {
        next.redirect("/auth");
      }
      next.redirect("/auth");
    }
  } else {
    next();
  }
};

function App(props) {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <GuardProvider guards={[requireLogin]}>
          <Switch>
            <GuardedRoute exact path="/" meta={{ auth: true }}>
              <Redirect to="/profile" />
            </GuardedRoute>
            <GuardedRoute
              path="/profile"
              component={Profile}
              meta={{ auth: true }}
            />

            <GuardedRoute path="/auth" component={Auth} meta={{ auth: true }} />
          </Switch>
        </GuardProvider>
      </Router>
    </div>
  );
}

export default withRouter(App);
