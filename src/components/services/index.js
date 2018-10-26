import {
  Button,
  Paper,
  Typography,
  Divider,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Grid,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import WeakOffer from "./weakOffer";
import StrongOffer from "./strongOffer";

import { Check } from "@material-ui/icons";

const style = theme => ({
  root: {
    marginTop: "5vh",
    marginBottom: "5vh",
    width: "100vw",
    maxWidth: "100%",
    position: "relative",
    flexGrow: 1
  },
});

class Services extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={0} justify="center" alignItems="center">
            <Grid item>
              <WeakOffer />
            </Grid>
            <Grid item>
              <StrongOffer />
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

export default withStyles(style)(Services);
