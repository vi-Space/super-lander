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
  
  const style = theme => ({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      background: "#FFF",
      width: "22vw",
    },
    content: {
      padding: "10px",
    },
    button: {
      margin: theme.spacing.unit,
      marginLeft: "50%",
      transform: "translateX(-50%)",
      padding: "25px",
    },
    description: {
      opacity: ".4",
    },
    title: {
      textAlign: "left",
    },
  });
  
  class StrongOffer extends Component {
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
  
      const benefitsList = ["szybszy", "lepszy", "piękniejszy", "większy", "droższy", "piękniejszy", "większy", "droższy", "chuj wie co", "ale wiecej"];
  
      return (
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
                  Kup śmieciu
                </Button>
              </div>
            </Paper>
      );
    }
  }
  
  export default withStyles(style)(StrongOffer);
  