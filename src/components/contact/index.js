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
    width: "100vw",
    maxWidth: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: "5%",
    paddingBottom: "5%",
    background:
      "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), url(https://source.unsplash.com/cU7wLFRyWWw/1600x900)",
  },
  content: {
    marginLeft: "50%",
    transform: "translateX(-50%)"
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
