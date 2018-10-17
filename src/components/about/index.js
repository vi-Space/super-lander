import React, { Component } from 'react';
import { withStyles, Typography, Paper } from '@material-ui/core';

import {grey} from '@material-ui/core/colors';

const style = theme => ({
    root: {
        width: "100vw",
        maxWidth: "100%",
        paddingTop: "5vh",
        paddingBottom: "5vh",
        minHeight: "10vh",
        background: "transparent",
        position: "relative"
        
    },
    container: {
        position: "relative",
        display: "inline-block",
        width: "70%",
        left: "15%"
    },
    headline: {
        textAlign: "center",
    },
});

class About extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Paper className={classes.root}>
                <div className={classes.container}>
                    <Typography variant="display1" className={classes.headline}>About us</Typography>
                    <Typography variant="subheading" className={classes.headline}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nunc risus. Mauris feugiat fermentum nulla, et malesuada metus hendrerit id. Sed egestas nibh augue, ut molestie arcu aliquet quis. Nullam pharetra eleifend enim vel tincidunt. Quisque gravida lorem at ornare congue. Maecenas dignissim elit eu odio volutpat pharetra. Suspendisse sed eleifend orci, nec dignissim risus. Fusce non luctus metus, nec sodales mauris. Maecenas libero lorem, tempor et dictum a, rutrum ut risus. Suspendisse nibh magna, mattis a viverra id, ullamcorper in ipsum. Duis aliquam commodo mauris, vitae viverra lorem dapibus sit amet.</Typography>
                </div>
            </Paper>



        );
    }
}

export default withStyles(style)(About);