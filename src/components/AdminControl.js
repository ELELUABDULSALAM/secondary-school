import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function AdminControl() {
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
          to="/admin"
          component={Link}
        >
          Add New Member
        </Button>{" "}
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
          to="/studentList"
          component={Link}
        >
          View Result
        </Button>
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

export default AdminControl;
