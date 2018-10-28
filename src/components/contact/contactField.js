import React, { Component } from "react";
import {
  Typography,
  Paper,
  Grid,
  Input,
  Button,
  TextField,
  withStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  CardActions,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

import PhoneIcon from '@material-ui/icons/PhoneOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';


const style = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  paper: {
    padding: "30px",
    width: "40vw",
  },
  button: {
    margin: theme.spacing.unit,
    float: "right",
  },
});

const contacts = [
  { icon: PhoneIcon, value: "+48 450010420", link: "tel:+48450010420" },
  {
    icon: MailIcon,
    value: "example@vispace.online",
    link: "mailto:example@vispace.online",
  },
];

class ContactField extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="title">Contact</Typography>
            <br />
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
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(style)(ContactField);
