import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

import {translate} from '../../../utils/language';

const style = {
    typography: {
        fontSize: "3rem"
    }
};

class Head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <div className="head"><Typography className={classes.typography}>{translate('global.slogan')}</Typography></div>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(Head);
