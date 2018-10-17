/* eslint-disable react/no-multi-comp */

import React from "react";

import { Link } from "react-router-dom";

import Langlate from 'react-langlate';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

import {translate} from '../../utils/language';

const contacts = [
  { icon: PhoneIcon, value: "+48 450010420", link: "tel:+48450010420" },
  {
    icon: MailIcon,
    value: "example@vispace.online",
    link: "mailto:example@vispace.online",
  },
];

const styles = {};

class Contact extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}>
        <DialogTitle id="simple-dialog-title">
          {translate("contact.method")}
        </DialogTitle>
        <div>
          <List>
            {contacts.map(contact => (
              <ListItem
                button
                key={contact.value}>
                <ListItemAvatar>
                  <Avatar>
                    <contact.icon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <a
                      target="_blank"
                      href={contact.link}
                      style={{ textDecoration: "none", color: "#000" }}>
                      {contact.value}
                    </a>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(Contact);
