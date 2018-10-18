import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { translate } from "../../../utils/language";

const style = {
  typography: {
    fontSize: "3rem",
  },
};

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: {
        opacity: 1.0,
        transition: "all .255s ease",
      },
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  /**
   * 
   * @param {*} max 
   * @param {*} value 
   */
  getPercentage(max, value) {
    return (max-value) / max * 100;
  }

  handleScroll = event => {
    //console.log(window.pageYOffset);
    let fade = this.getPercentage(window.outerHeight/8, window.pageYOffset) / 100;

    this.setState({
      slogan: {
        opacity: fade,
        transform: "translateY(" + -window.pageYOffset / 2 + "px)",
      },
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className="head">
          <Typography className={classes.typography}>
            <div style={this.state.slogan}>{translate("global.slogan")}</div>
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(Head);
