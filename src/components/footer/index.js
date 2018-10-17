import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const styles = {
  root: {
    height: "128px",
    maxHeight: "128px",
    position: "relative",
    background: "#212121",
    width: "100vw",
    maxWidth: "100%",
    marginTop: "3%",
  },
  container: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  typography: {
    lineHeight: "128px",
    color: "#FFFFFF",
  },
  linksTypo: {
    textAlign: "center",
    color: "#FFFFFF"
  },
  linksUrl: {
    textAlign: "center",
    color: "#FFFFFF"
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
            <Grid item xs={6}>
              <Typography variant="subheading" className={classes.typography}>
                Copyright (c) viSpace 2018
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.typography}>
                <Grid container>
                  {this.socialMedia.map(media => {
                    return (
                      <Grid item xs={4}>
                        <Typography classNames={classes.linksTypo} variant="subheading">
                          <Link classNames={classes.linksUrl} to={media.href}>
                            {media.title}
                          </Link>
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);