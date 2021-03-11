import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Admin from "./components/Admin";
import ResolveAuth from "./components/ResolveAuth";
import UploadResult from "./components/UploadResult";
import StudentList from "./components/StudentList";
import Test from "./components/Test";
import ShowResult from "./components/ShowResult";
import AdminControl from "./components/AdminControl";
import StudentControl from "./components/StudentControl";
import TeacherControl from "./components/TeacherControl";
import Profile from "./components/Profile";
import StudentResult from "./components/StudentResult";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/resolve" component={ResolveAuth} />
          <Route path="/admincontrol" component={AdminControl} />
          <Route path="/studentcontrol" component={StudentControl} />
          <Route path="/teachercontrol" component={TeacherControl} />
          <Route path="/admin" component={Admin} />
          <Route path="/upload" component={UploadResult} />
          <Route path="/result" component={ShowResult} />
          <Route path="/studentList" component={StudentList} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit-student/:id/:memberClass" component={Admin} />
          <Route
            path="/studentresult/:id/:memberClass"
            component={StudentResult}
          />
          <Route path="/test" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
