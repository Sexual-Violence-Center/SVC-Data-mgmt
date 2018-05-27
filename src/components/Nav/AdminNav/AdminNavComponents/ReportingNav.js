import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { List, ListItem, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

class ReportingNav extends Component {
  render() {
    return (
      <div>
        <List>
          <br />
          <br />
          <br />
          <Typography variant="title" className="navTitle">
            Reporting
          </Typography>
          <ListItem button>
            <Link to="/custom_report" className="navButton">
              Custom Report
              </Link>
          </ListItem>
          <ListItem button>
            <Link to="/federal_report" className="navButton">
              Federal Report
              </Link>
          </ListItem>
          <ListItem button>
            <Link to="/county_report" className="navButton">
              County Report
              </Link>
          </ListItem>
        </List>
      </div>
    )
  }
};

export default ReportingNav;