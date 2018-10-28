import React, { Component } from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";

import { grey } from "@material-ui/core/colors";
import { translate } from "../../utils/language";

const style = theme => ({
  root: {
    width: "100vw",
    maxWidth: "70%",
    marginLeft: "15%",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    minHeight: "15vh",
    marginTop: "-100px",
    zIndex: 3,
    position: "relative",
  },
  container: {
    position: "relative",
    display: "inline-block",
    width: "70%",
    left: "15%",
  },
  headline: {
    textAlign: "center",
  },
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.container}>
          <Typography variant="display1" className={classes.headline}>
            Über uns
          </Typography>
          <Typography variant="subheading" className={classes.headline}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mi et velit aliquam ultricies sollicitudin a nunc. Aenean posuere nulla libero, vitae placerat turpis finibus nec. Aliquam ac porttitor ex, eget molestie velit. Morbi consequat massa a dolor vehicula ornare. Sed ac orci nibh. Cras pretium tortor ac ex suscipit, nec ornare sem condimentum. Suspendisse porttitor orci at ullamcorper feugiat. Fusce pulvinar vel neque et commodo. Donec quis nunc id dui faucibus aliquet at eu nisi.
          </Typography>
        </div>
      </Paper>
    );
  }
}

export default withStyles(style)(About);
