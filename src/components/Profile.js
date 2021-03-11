import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Nvabar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Profile() {
  const states = JSON.parse(localStorage.getItem("username"));
  const classes = useStyles();

  return (
    <>
      <Nvabar />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://pbs.twimg.com/profile_images/1324420867082903552/NRIqLbSE.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name: {states.firstName}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Surname: {states.surname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Reg No: {states.regId}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Role: {states.memberType}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Address: {states.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Profile;
