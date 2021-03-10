import React from "react";
import axios from "axios";

function ShowResult() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");

    var data = JSON.stringify({ memberClass: "SS2" });

    var config = {
      method: "post",
      url: "https://halal-school.herokuapp.com/fetchMembers",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    var data = JSON.stringify({
      studentName: "Olaniyi",
      studentClass: "SS2",
      session: "2020/2021",
      term: "2nd",
    });

    var config = {
      method: "get",
      url: "https://halal-school.herokuapp.com/get-result",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <p>Result page</p>
      <button onClick={handleClick}>click me</button>
    </>
  );
}

export default ShowResult;
