import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ResolveAuth = () => {
  const history = useHistory();

  async function protectRoute() {
    const type = await localStorage.getItem("info");
    const token = await localStorage.getItem("token");

    if (token && type === "Student") {
      history.push("/studentcontrol");
      // history.push("/result");
    } else if (token && type === "Teacher") {
      history.push("/teachercontrol");
      // history.push("/upload");
    } else if (token && type === "Admin") {
      history.push("/admincontrol");
      // history.push("/admincontrol");
    } else {
      history.push("/");
    }
  }

  useEffect(() => {
    protectRoute();
  }, []);

  return <div></div>;
};

export default ResolveAuth;
