import React, { Component } from "react";
import {
  Typography,
  Paper,
  Grid,
  Input,
  Button,
  TextField,
  withStyles,
} from "@material-ui/core";

const style = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  paper: {
    padding: "30px",
    width: "40vw",
  },
  button: {
    margin: theme.spacing.unit,
    float: "right",
  },
});

class ContactField extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="title">Contact</Typography>
            <br />
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="outlined-uncontrolled"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-uncontrolled"
                  label="Company"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <br />
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="outlined-uncontrolled"
                  label="Phone"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <br />
              <Grid item xs={10}>
                <TextField
                  multiline
                  required
                  id="outlined-multiline-flexible"
                  label="Message"
                  className={classes.textField}
                  type="Message"
                  name="Message"
                  fullWidth
                  autoComplete="Message"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}>
                  SEND
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} />
      </Grid>
    );
  }
}

export default withStyles(style)(ContactField);
