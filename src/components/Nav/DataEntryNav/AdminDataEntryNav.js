import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 100;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 50,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class AdminDataEntryNav extends Component {
  render() {

    const { classes } = this.props;


    return (
      <div>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <Link to="/telephone">
              Telephone
            </Link>
          </List>
          <Divider />
          <List>
            <Link to="/in-person">
              In-Person
            </Link>
          </List>
        </Drawer>
      </div>
    )
  }
};

AdminDataEntryNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDataEntryNav);