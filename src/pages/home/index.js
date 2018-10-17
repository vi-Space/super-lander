import React, {Component} from 'react';

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {Head} from './sections/';
import {About, Contact} from '../../components/'
import { Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
      marginTop: "-100px",
      maxWidth: "90%",
      marginLeft: "5%",
      position: "relative",
      zIndex: 3
    },
  });

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return <div className="home">
            <Head />
            <Paper className={classes.root} elevation={1}>
                <About />
            </Paper>
            <br/>
            <Contact />
        </div>;
    }
}

export default withStyles(styles)(Home);