import React from "react";
import { Link } from "react-router-dom";

function StudentControl() {
  return (
    <>
      <button className="btn btn-primary">
        <Link to="/result">View Result</Link>
      </button>
      <button className="btn btn-primary">
        <Link to="/profile">View Profile</Link>
      </button>
    </>
  );
}

export default StudentControl;
