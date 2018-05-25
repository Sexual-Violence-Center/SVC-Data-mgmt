import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import Logout from '../../Logout/Logout';
import AdminToolsNav from '../AdminToolsNav/AdminToolsNav';
import ReportingNav from '../ReportingNav/ReportingNav';
import Header from '../../Header/Header';
import AdminDataEntryNav from '../../Nav/DataEntryNav/AdminDataEntryNav';

const drawerWidth = 240;

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



class AdminNav extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar >
            <Button>
              <Link to="/adminlandingpage" style={{ color: "white", textDecoration: 'none' }}>
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
          <List>
            <br />
            <br/>
            <Typography variant="title">
              Reporting
            </Typography>
            <ListItem button>
              <Link to="/custom_report" style={{ color: "black", textDecoration: 'none' }}>
                Custom Report
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/federal_report" style={{ color: "black", textDecoration: 'none' }}>
                Federal Report
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/county_report" style={{ color: "black", textDecoration: 'none' }}>
                County Report
              </Link>
            </ListItem>
          </List>
          <Divider />
          <List>
            <Typography variant="title">
              Admin Entry Tools
            </Typography>
            <ListItem button>
              <Link to="/user_entry_page" style={{ color: "black", textDecoration: 'none' }}>
                User Entry
            </Link>
            </ListItem>
            <ListItem button>
              <Link to="/search_and_update" style={{ color: "black", textDecoration: 'none' }}>
                Search/Update
            </Link>
            </ListItem>
          </List>
          <List>
            <Divider />
            <br />
            <Typography variant="title">
              Data Entry
                  </Typography>
            <ListItem button>
              <Link to="/telephone" style={{ color: 'black', textDecoration: "none" }}>
                Telephone
                    </Link>
            </ListItem>
            <ListItem button>
              <Link to="/in-person" style={{ color: 'black', textDecoration: "none" }}>
                In-Person
                    </Link>
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
};

AdminNav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AdminNav);