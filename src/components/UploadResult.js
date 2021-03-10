import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import {
  TableHeaders,
  headers,
  rows,
  TableRow,
  AddRowButton,
} from "react-table";

import "./UploadResult.css";
import { useForm } from "react-hook-form";

import {
  Button,
  Card,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  NavItem,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import DataManager from "../UserContext";

function UploadResult() {
  const [states, setStates] = useState([]);
  const [students, setStudents] = useState([]);
  const [testscore, setTestscore] = useState([]);

  const [profile, setProfile] = useState([]);

  const { register, handleSubmit } = useForm();
  const { state, signIn } = useContext(DataManager);

  const year = new Date().getFullYear();
  const years = Array.from(new Array(20), (val, index) => index + year);

  const handleChange = async (e) => {
    const memberClass = e.target.value;

    await axios
      .post("https://halal-school.herokuapp.com/fetchMembers", {
        memberClass,
      })
      .then((response) => {
        const list = response.data.info;
        setStudents(response.data.info);
      })
      .catch((error) => {
        console.log("We are getting this error:");
        console.log(error.response);
      });
  };

  const studentDetail = (e) => {
    students.forEach(function (arrayItem) {
      if (arrayItem.firstName === e.target.value) {
        console.log(arrayItem.firstName);
        const studentFirstName = arrayItem.firstName;
        const studentClass = arrayItem.memberClass;
        localStorage.setItem("studentFirstName", studentFirstName);
        localStorage.setItem("studentClass", studentClass);
        setStates(arrayItem);
      }
    });
  };

  const onSubmit = (data, e) => {
    localStorage.setItem("ResultType", data.ResultType);
    localStorage.setItem("term", data.term);
    setTestscore((testscore) => [
      ...testscore,
      {
        subject: data.subject,
        score: data.score,
      },
    ]);
  };
  const onError = (errors, e) => console.log(errors, e);

  const handleMarkSubmitClick = async (e) => {
    e.preventDefault();
    const studentFirstName = localStorage.getItem("studentFirstName");
    const studentClass = localStorage.getItem("studentClass");
    const ResultType = localStorage.getItem("ResultType");
    const term = localStorage.getItem("term");
    await axios
      .post("https://halal-school.herokuapp.com/upload-result", {
        studentName: studentFirstName,
        studentClass: studentClass,
        teacherName: "Haleemah",
        term: term,
        session: "2020/2021",
        resultType: ResultType,
        result: testscore,
      })
      .then((response) => {
        console.log(response);
        setTestscore([]);
        alert(response.data.message);
      })
      .catch((error) => {
        console.log("We are getting this error:");
        console.log(error.response);
      });
  };

  return (
    <div className="form">
      <h1>Upload the result for student </h1>
      <Form.Group>
        <Form.Control
          as={Col}
          md="4"
          as="select"
          name="memberClass"
          size="lg"
          onChange={handleChange}
        >
          <option value="">Select Class</option>
          <option value={"SS3"}>SS3</option>
          <option value={"SS2"}>SS2</option>
          <option value={"SS1"}>SS1</option>
          <option value={"JSS3"}>JSS3</option>
          <option value={"JSS2"}>JSS2</option>
          <option value={"JSS1"}>JSS1</option>
        </Form.Control>
        <br />
        {students.length === 0 ? null : (
          <>
            <Form.Control
              as="select"
              name="student"
              size="lg"
              onChange={studentDetail}
            >
              <option value="student">Student Name</option>
              {students.map((student) => (
                <option key={student._id} value={student.firstName}>
                  {student.firstName}
                </option>
              ))}
            </Form.Control>
          </>
        )}
        <br />
      </Form.Group>
      {states.length === 0 ? null : (
        <>
          <br />
          <Form.Control
            as={Col}
            md="4"
            as="select"
            name="session"
            size="lg"
            // onChange={handleChange}
          >
            <option value="">Select Year</option>
            {years.map((year, index) => {
              return (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              );
            })}
          </Form.Control>
          <br />
          <>
            <br /> <br /> <br /> <br /> <br />
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <select name="ResultType" ref={register({ required: true })}>
                <option value="">Type of result</option>
                <option value={"Test"}>Test</option>
                <option value={"Exam"}>Exam</option>
              </select>
              <select name="term" ref={register({ required: true })}>
                <option value="">Select Terms</option>
                <option value={"1st"}>First Term</option>
                <option value={"2nd"}>second Term</option>
                <option value={"3rd"}>third Term</option>
              </select>
              <input name="subject" ref={register} />
              <input name="score" ref={register} />
              <button type="submit">Add to Record</button>
            </form>
          </>
          <Form>
            <Card style={{ width: "18rem" }} className="card"></Card>
            <table className="tablecode">
              <tr className="tablerow">
                <th>Subject</th>
                <th>Score</th>
              </tr>
              {testscore.map((mark) => (
                <>
                  <tr>
                    <td key={mark.id}>{mark.subject}</td>
                    <td key={mark.id}>{mark.score}</td>
                  </tr>
                </>
              ))}
            </table>
            <br />
            <button
              type="submit"
              onClick={handleMarkSubmitClick}
              className="btn btn-primary"
              // disabled={submitting}
            >
              Upload
            </button>
          </Form>
        </>
      )}
    </div>
  );
}

export default UploadResult;
