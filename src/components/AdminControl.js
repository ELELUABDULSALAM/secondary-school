import React from "react";
import { Link } from "react-router-dom";

function AdminControl() {
  return (
    <>
      <button className="btn btn-primary">
        <Link to="/admin">Add New member</Link>
      </button>
      <button className="btn btn-primary">
        <Link to="/studentList">View Result</Link>
      </button>
      <button className="btn btn-primary">
        <Link to="/profile">View Profile</Link>
      </button>
    </>
  );
}

export default AdminControl;
