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

import Offer from './offer';

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
  container: {
    maxWidth: "90%",
    marginLeft: "5%"
  }
});

class Services extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={16} justify="center" alignItems="center">
            <Grid item xs={12} md={5}>
              <Offer title="Test offer" image="https://source.unsplash.com/YXemfQiPR_E/1600x900" meta="Consulting" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mi et velit aliquam ultricies sollicitudin a nunc. Aenean posuere nulla libero, vitae placerat turpis finibus nec. Aliquam ac porttitor ex, eget molestie velit. Morbi consequat massa a dolor vehicula ornare. Sed ac orci nibh. Cras pretium tortor ac ex suscipit, nec ornare sem condimentum. Suspendisse porttitor orci at ullamcorper feugiat. Fusce pulvinar vel neque et commodo. Donec quis nunc id dui faucibus aliquet at eu nisi. In id ante feugiat, volutpat dolor eget, pretium turpis. Ut eget dolor porta, tempus nibh nec, imperdiet ligula. Proin tincidunt, sem finibus volutpat semper, massa augue iaculis odio, quis venenatis metus urna nec dolor. " profits={["test", "test", "test"]} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Offer title="Test offer" image="https://source.unsplash.com/JL82X5WO_Tg/1600x900" meta="Reparation" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mi et velit aliquam ultricies sollicitudin a nunc. Aenean posuere nulla libero, vitae placerat turpis finibus nec. Aliquam ac porttitor ex, eget molestie velit. Morbi consequat massa a dolor vehicula ornare. Sed ac orci nibh. Cras pretium tortor ac ex suscipit, nec ornare sem condimentum. Suspendisse porttitor orci at ullamcorper feugiat. Fusce pulvinar vel neque et commodo. Donec quis nunc id dui faucibus aliquet at eu nisi. In id ante feugiat, volutpat dolor eget, pretium turpis. Ut eget dolor porta, tempus nibh nec, imperdiet ligula. Proin tincidunt, sem finibus volutpat semper, massa augue iaculis odio, quis venenatis metus urna nec dolor. Cras a interdum urna, ut dictum quam. Sed sodales, nunc in posuere maximus, turpis diam ornare ante, eu egestas tellus augue et sapien. Nam mattis ipsum non congue euismod." profits={["test", "test", "test", "test", "test"]} />
            </Grid>
          </Grid>
        </div>

      </div>
    );
  }
}

export default withStyles(style)(Services);
