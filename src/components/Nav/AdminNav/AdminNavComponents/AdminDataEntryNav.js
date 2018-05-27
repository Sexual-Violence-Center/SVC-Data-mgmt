import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { List, ListItem, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

class AdminDataEntryNav extends Component {
  render() {
    return (
      <div>
        <List>
          <Divider />
          <br />
          <Typography variant="title" className="navTitle">
            Data Entry
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
      </div>
    )
  }
};

export default AdminDataEntryNav;