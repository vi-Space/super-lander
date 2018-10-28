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
      background: {
        filter: "blur(2px)"
      }
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
      background: {
        filter: `blur(${fade * 2}px)`
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div className="head">
          <div className="background" style={this.state.background}></div>
          <Typography className={classes.typography}>
            <div style={this.state.slogan}>Gob<span style={{fontWeight: "bold"}}>D</span> <span style={{fontWeight: "300"}}>Consulting</span>
</div>
          </Typography>
        </div>
    );
  }
}

export default withStyles(style)(Head);
