import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import Logout from '../../Logout/Logout';
import Header from '../../Header/Header';

const drawerWidth = 190;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 100,
    zIndex: 1,
    overflow: 'visible',
    position: 'fixed',
    display: 'flex',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'primary'
  },
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  flex: {
    flex: 1,
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
});

class UserNav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar >
            <Header />
            <Typography variant="display1" color="inherit" className={classes.flex} style={{ paddingLeft: '20px', color: '#FAFAFA' }}>
              Data Management System
            </Typography>
            <br />
            <Button>
              <Link to="/userlandingpage" style={{ color: "white", textDecoration: 'none' }}>
                Home
              </Link>
            </Button>
            <Logout />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <br />
          <br />
          <br />
          <List>
          <Typography variant="title" className="navTitle">
            Forms
          </Typography>
            <ListItem button>
              <Link to="/telephone" className="navButton">
                Telephone
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/in-person" className="navButton">
                In-Person
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
};

UserNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserNav);