import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function StudentControl() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "50px" }}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
          to="/result"
          component={Link}
        >
          View Result
        </Button>{" "}
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
          to="/profile"
          component={Link}
        >
          View Profile
        </Button>
      </div>
    </>
  );
}

export default StudentControl;
