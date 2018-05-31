import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Drawer, Grid } from '@material-ui/core';

import Logout from '../../Logout/Logout';
import Header from '../../Header/Header';
import ReportingNav from './AdminNavComponents/ReportingNav';
import AdminToolsNav from './AdminNavComponents/AdminToolsNav';
import AdminDataEntryNav from './AdminNavComponents/AdminDataEntryNav';

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



class AdminNav extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container >
          <Grid item xs={3} sm={6} lg={12}>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
              <Toolbar >
                <Header />
                <Typography variant="display1" color="inherit" className={classes.flex} style={{ paddingLeft: '20px', color: '#FAFAFA' }}>
                  Data Management System
                  </Typography>
                <br />
                <Button>
                  <Link to="/adminlandingpage" style={{ color: "white", textDecoration: 'none' }}>
                    Home
                    </Link>
                </Button>
                <Logout />
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Drawer
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.toolbar} />
              <ReportingNav />
              <AdminToolsNav />
              <AdminDataEntryNav />
            </Drawer>
          </Grid>
        </Grid>
      </div>
    )
  }
};

AdminNav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AdminNav);