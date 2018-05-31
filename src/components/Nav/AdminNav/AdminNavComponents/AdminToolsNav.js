import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

class AdminToolsNav extends Component {
  render() {
    return (
      <div>
        <Divider />
        <br />
        <List>
          <Typography variant="title" className="navTitle">
            Admin Entry Tools
            </Typography>
          <ListItem button>
            <Link to="/user_entry_page" className="navButton">
              User Entry
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/search_and_update" className="navButton">
              Search/Update
            </Link>
          </ListItem>
        </List>
      </div>
    )
  }
};


export default AdminToolsNav;