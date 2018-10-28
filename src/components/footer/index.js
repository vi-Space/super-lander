import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const styles = {
  root: {
    minHeight: "128px",
    position: "relative",
    background: "#212121",
    width: "100vw",
    maxWidth: "100%"
  },
  container: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  typography: {
    lineHeight: "128px",
    color: "#FFFFFF",
  },
  linksUrl: {
    textAlign: "center",
    color: "#FFFFFF",
    textDecoration: "none",
    transition: "all .255s ease",
    "&:hover": {
      opacity: '.9',
    }
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);

    this.socialMedia = [
      { title: "Impressum", href: "/impressum" },
      { title: "Policy", href: "/policy" },
      { title: "FAQ", href: "/faq" },
    ];
  }

  render() {
    const { classes } = this.props;

    {
      /* <Typography variant="subheading" className={classes.typography}>Copyright Rudy</Typography> */
    }

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Typography variant="subheading" className={classes.typography}>
                Copyright (c) viSpace 2018
              </Typography>
            </Grid>
            <Grid item md={3} xs={12}>
                <Grid container style={{height: "100%"}}>
                  {this.socialMedia.map(media => {
                    return (
                      <Grid item md={4} xs={3}>
                        <Typography classNames={classes.typography} style={{textAlign: "right", lineHeight: "128px"}} variant="subheading">
                          <a href={media.href} className={classes.linksUrl}>{media.title}</a>
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);