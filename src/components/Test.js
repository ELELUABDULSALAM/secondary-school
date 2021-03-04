import React from "react";
import axios from "axios";

function Test() {
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
  return <div></div>;
}

export default Test;
