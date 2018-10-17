import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import ContactField from "./contactField";
import { Typography, Paper } from "@material-ui/core";

const style = theme => ({
  root: {
    height: "100%",
    width: "100vw",
    maxWidth: "100%",
  },
  background: {
    position: "relative",
    height: "30vw",
    width: "100vw",
    maxWidth: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background:
      "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83b70261d97d9ea9c649c1414c89a834&auto=format&fit=crop&w=1353&q=80)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  
});

class Contact extends Component {
  constructor(props) {
    super(props); // LEAVE ALONE
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.background}>
          <div className={classes.content}>
            <ContactField />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Contact);

Contact.propTypes = {};
