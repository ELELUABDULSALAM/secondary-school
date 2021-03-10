import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";

function StudentResult() {
  const { register, handleSubmit } = useForm();
  var { id, memberClass } = useParams();
  console.log(id.substring(1), memberClass.substring(1));
  const studentName = id.substring(1);
  const studentClass = memberClass.substring(1);

  const onSubmit = async (data, e) => {
    const term = data.term;
    var data = JSON.stringify({
      studentName,
      studentClass,
      session: "2020/2021",
      term,
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
  };

  return (
    <>
      <p>View student result</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select name="session" ref={register({ required: true })}>
          <option value="">Session</option>
          <option value={"2020"}>2020</option>
          <option value={"2021"}>2021</option>
          <option value={"2022"}>2022</option>
          <option value={"2023"}>2023</option>
        </select>
        <select name="term" ref={register({ required: true })}>
          <option value="">Select Terms</option>
          <option value={"1st"}>First Term</option>
          <option value={"2nd"}>second Term</option>
          <option value={"3rd"}>third Term</option>
        </select>
        <button>Click me</button>
      </form>
      <table className="result">
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Test Score</th>
            <th>Exam score</th>
            <th>Total Score</th>
            <th></th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Math Matics</th>
            <th>20</th>
            <th>70</th>
            <th>90</th>
            <th></th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Math Matics</th>
            <th>20</th>
            <th>70</th>
            <th>90</th>
            <th></th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Math Matics</th>
            <th>20</th>
            <th>70</th>
            <th>90</th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default StudentResult;
