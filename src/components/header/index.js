import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Langlate from 'react-langlate';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import classNames from "classnames";

import Drawer from "./drawer";
import Contact from "./contact";

import {setLanguage, translate, getLanguage} from '../../utils/language';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    maxWidth: "80%",
    position: "fixed",
    marginLeft: "10%",
    borderRadius: "10px",
    transition: "all .255s ease",
  },
  grow: {
    flexGrow: 1,
    textAlign: "center",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  languageMenuButton: {
    marginLeft: 12, 
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: [
        { link: "/test", icon: "add_circle", name: "Test" },
        { link: "/test", icon: "add_circle", name: "Test" },
      ],
      drawer: false,
      contact: false,

      appBar: {
        background: "rgba(255, 255, 255, 0.15)",
        color: "#fff",
        marginTop: "3.75vh",
      },
      language: false,
      snackbar: null
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  toggleDrawer(state = false) {
    this.setState({ drawer: state });
  }

  toggleContact(state = false) {
    this.setState({ contact: state });
  }

  handleScroll = event => {
    //console.log(window.pageYOffset);

    if (window.pageYOffset > 374) {
      this.setState({
        appBar: { background: "#fff", color: "#000", marginTop: "1.75vh" },
      });
    } else {
      this.setState({
        appBar: {
          background: "rgba(255, 255, 255, 0.15)",
          color: "#fff",
          marginTop: "3.75vh",
        },
      });
    }
  };

  showLanguageMenu = event => {
    this.setState({ language: event.currentTarget });
  };

  hideLanguageMenu = () => {
    this.setState({ language: null });
  };

  setSnackbar = (message=null) => {
    this.setState({snackbar: message});
  };

  setLanguage = (language="en_US") => {
    setLanguage(language);
    this.setSnackbar(translate("language.changed"));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          className={classes.appBar}
          style={this.state.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              onClick={() => this.toggleDrawer(true)}
              color="inherit"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}>
              super-lander
            </Typography>
            <div>
              <IconButton color="inherit">
                <PhoneIcon onClick={() => this.toggleContact(true)} />
              </IconButton>
              <IconButton
                color="inherit"
                aria-owns={this.state.language ? "contact-menu" : null}
                aria-haspopup="true"
                onClick={this.showLanguageMenu}
                className={classes.languageMenuButton}>
                <LanguageIcon
                  onClick={() => localStorage.setItem("language", "de_DE")}
                />
              </IconButton>
              <Menu
                id="contact-menu"
                anchorEl={this.state.language}
                open={Boolean(this.state.language)}
                onClose={() => this.hideLanguageMenu()}>
                <MenuItem selected={getLanguage() === "en_US"} onClick={() => {this.hideLanguageMenu(); this.setLanguage("en_US"); }}>English</MenuItem>
                <MenuItem selected={getLanguage() === "de_DE"} onClick={() => {this.hideLanguageMenu(); this.setLanguage("de_DE"); }}>German</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.drawer}
          toggleDrawer={this.toggleDrawer.bind(this)}
        />

        <Contact
          open={this.state.contact}
          onClose={() => this.toggleContact(false)}
        />


        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackbar !== null}
          autoHideDuration={6000}
          onClose={() => this.setSnackbar(null)}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.snackbar}</span>}
          />
      </div>
    );
  }
}

export default withStyles(styles)(Header);
