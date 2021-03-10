import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Profile() {
  const states = JSON.parse(localStorage.getItem("username"));
  return (
    <>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img
          variant="top"
          src="https://pbs.twimg.com/profile_images/1324420867082903552/NRIqLbSE.jpg"
        />
        <Card.Body>
          <Card.Title> Name: {states.firstName}</Card.Title>
          <Card.Title> Surname: {states.surname}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem> Reg No: {states.regId}</ListGroupItem>
          <ListGroupItem> Role: {states.memberType}</ListGroupItem>
          <ListGroupItem> Address: {states.address}</ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
}

export default Profile;
