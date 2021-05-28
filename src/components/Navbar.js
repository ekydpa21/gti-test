import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { signOut } from "../store/actions/authAction";

export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signOut(false));
    history.push("/auth");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <h1 className="navbar-brand">GTI TEST</h1>
        {location.pathname !== "/auth" && (
          <Link
            className="btn btn-outline-danger"
            type="submit"
            to="/auth"
            onClick={handleSignOut}
          >
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
}
