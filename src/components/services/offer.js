import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, Divider, Avatar, CardMedia, CardHeader, CardActions, withStyles, List, ListItem, ListItemIcon, ListItemText, CardContent, IconButton, Typography, Collapse, Button } from '@material-ui/core';

import {ExpandMore, Check, Favorite} from '@material-ui/icons';
import classnames from 'classnames';

import {blue} from '@material-ui/core/colors';

const style = theme => ({
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
          marginRight: -8,
        },
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      button: {
          paddingTop: "17px",
          paddingBottom: "17px",
          paddingLeft: "30px",
          paddingRight: "30px"
      },
      avatar: {
        backgroundColor: blue[800],
        color: "#FFF"
      },
      content: {
          paddingTop: "5%",
          paddingBottom: "5%"
      }
});

class Offer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    render() {
        const {title, meta, image, description, profits, classes} = this.props;
        const {expanded} = this.state;

        return <Card>
            <CardHeader avatar={
                
              <Avatar className={classes.avatar}><Favorite /></Avatar>
          } title={title} subheader={meta} />

            <CardMedia
                className={classes.media}
                image={image}
            />

            <CardContent className={classes.content}>
                <Typography component="p">
                    {description}
                </Typography>
            </CardContent>
          <Divider />
        <CardActions disableActionSpacing>
            <Button className={classes.button} variant="contained" color="primary">Buy</Button>

            <IconButton className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })} aria-label="Show more" aria-expanded={expanded} onClick={() => this.setState({expanded: !expanded})}>
                <ExpandMore />
            </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <List component="nav">{profits.map((text, index) => {
        return (
          <ListItem>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )})}</List>
          </CardContent>
        </Collapse>
        </Card>
    }
}

export default withStyles(style)(Offer);

Offer.propTypes = {
    title: PropTypes.string,
    meta: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    profits: PropTypes.array
}