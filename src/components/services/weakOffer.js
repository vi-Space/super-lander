import {
    Button,
    Paper,
    Typography,
    Divider,
    List,
    ListItemText,
    ListItem,
    ListItemIcon,
  } from "@material-ui/core";
  import { withStyles } from "@material-ui/core/styles";
  import React, { Component } from "react";
  
  import {Check} from '@material-ui/icons';

  import {grey} from '@material-ui/core/colors';
  
  const style = theme => ({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      background: grey[100],
      width: "17vw",
      shadow: ["none"]
    },
    content: {
      padding: "10px",
    },
    button: {
      margin: theme.spacing.unit,
      marginLeft: "50%",
      transform: "translateX(-50%)",
      padding: "15px",
    },
    description: {
      opacity: ".4",
    },

  });
  
  class WeakOffer extends Component {
    renderBenefits(list) {
      return list.map((text, index) => {
        return (
          <ListItem>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        );
      });
    }
  
    render() {
      const { classes } = this.props;
  
      const benefitsList = ["gorszy", "brzydszy", "rudy", "piegowaty", "ryży"];
  
      return (<React.Fragment>
            <br />
            <Paper className={classes.root}>
              <div className={classes.content}>
                <Typography variant="display1" className={classes.title}>
                  LOREM IMPUS
                </Typography>
                <Typography variant="title" className={classes.description}>
                  Krotki opis
                </Typography>
                <br />
                <Divider />
                <List component="nav">{this.renderBenefits(benefitsList)}</List>
                <Divider />
                <br/>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}>
                  Dla Biedy!
                </Button>
              </div>
            </Paper>
          </React.Fragment>);
    }
  }
  
  export default withStyles(style)(WeakOffer);
  