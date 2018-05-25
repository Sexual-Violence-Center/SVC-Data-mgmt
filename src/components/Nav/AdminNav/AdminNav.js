import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logout from '../../Logout/Logout';
import AdminToolsNav from '../AdminToolsNav/AdminToolsNav';
import ReportingNav from '../ReportingNav/ReportingNav';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  flex: {
    flex: 1,
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logoutButton: {
    marginLeft: 20
  },
  popperClose: {
    pointerEvents: 'none',
  },
});


class AdminNav extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Button>
                <Link to="/adminlandingpage" style={{color: "white", textDecoration: 'none'}}>
                  Home
                </Link>
              </Button>
              <ReportingNav />
              <AdminToolsNav style={{float: "right"}}/>
              <Logout className={classes.logoutButton}/>
            </Toolbar>
          </AppBar>
        </div>
    )
  }
};

AdminNav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AdminNav);