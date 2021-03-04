import React, { useEffect } from "react";
import "./ShowResult.css";
import axios from "axios";
import { useForm } from "react-hook-form";

function Result() {
  useEffect(async () => {});

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    const studentNames = JSON.parse(localStorage.getItem("username"));
    console.log(data.session, data.term, studentNames.firstName);
    const studentName = studentNames.firstName;
    const memberClass = studentNames.memberClass;
    await axios
      .get("https://halal-school.herokuapp.com/get-result", {
        studentName: "Olaniyi",
        studentClass: "SS2",
        session: "2020/2021",
        term: "2nd",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("We are getting this error:");
        console.log(error.response);
      });
  };
  const onError = (errors, e) => console.log(errors, e);

  const handleClick = async () => {};

  return (
    <>
      <h4>Result page</h4>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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

export default Result;
