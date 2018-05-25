import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import DataEntryPage from '../../DataEntryPage/DataEntryPage';
import AdminToolsNav from '../AdminToolsNav/AdminToolsNav';
import ReportingNav from '../ReportingNav/ReportingNav';

const drawerWidth = 200;

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  appBar: {
    zIndex: 1,
  },
  drawerPaper: {
    position: 'fixed',
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
          <List>
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
        <main className={classes.content}>
        <div className={classes.toolbar}/ >
        </main>
      </div>
    )
  }
};

AdminDataEntryNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminDataEntryNav);