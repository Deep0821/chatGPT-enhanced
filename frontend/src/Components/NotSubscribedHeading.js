import React from "react";
import { Link } from "react-router-dom";
import "./NotSubscribedHeading.css";

function NotSubscribedHeading() {
  return (
    // Links to store, only visible when a user is logged in and isn't subscribed
    <Link to={"/store"} className="not-subscribed-heading-container">
      <h4 className="not-subscribed-heading">Visit The Store to Start</h4>
    </Link>
  );
}

export default NotSubscribedHeading;
