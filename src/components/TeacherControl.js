import React from "react";
import { Link } from "react-router-dom";

function TeacherControl() {
  return (
    <>
      <button className="btn btn-primary">
        <Link to="/upload">Upload Result</Link>
      </button>
      <button className="btn btn-primary">
        <Link to="/studentList">View Student</Link>
      </button>
      <button className="btn btn-primary">
        <Link to="/profile">View my profile</Link>
      </button>
    </>
  );
}

export default TeacherControl;
