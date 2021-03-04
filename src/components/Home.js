import React, { useEffect } from "react";
import "../styles/style.css";
import logo from "../assets/school.jpg";
import { useHistory, Link } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  useEffect(() => {}, []);

  function Login(info) {
    localStorage.setItem("info", info);
    history.push("/login");
  }

  return (
    <div id="main-container">
      <img className="logo" src={logo} />
      ABDUL <i className="logo"></i>
      <div className="about">
        <h1 className="greeting">Welcome to School portal</h1>
        <p className="sales">A place for the future</p>
      </div>
      <div className="navigate-us">
        <div className="nav1" onClick={() => Login("Teacher")}>
          Login as Admin
        </div>
        <div className="nav1" onClick={() => Login("Teacher")}>
          Login as Teacher
        </div>
        <div className="nav1" onClick={() => Login("Student")}>
          Login as Student
        </div>
      </div>
    </div>
  );
};

export default Home;
