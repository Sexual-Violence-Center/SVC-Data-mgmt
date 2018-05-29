import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography } from '@material-ui/core';

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