import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core";

const style = theme => ({
    root: {
        height: "100vh",
    }
});

class Services extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}></div>
        );
    }
}

export default withStyles(style)(Services);