import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  // paper: {
  //   marginRight: theme.spacing.unit * 2,
  // },
  popperClose: {
    pointerEvents: 'none',
  },
});


class AdminToolsNav extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = event => {
    if (this.target2.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };
  render() {

    const { classes } = this.props;
    const { open } = this.state;

    return (
        <div>
          <Manager>
            <Target>
              <div ref={node => { this.target2 = node; }}>
                <Button
                  aria-owns={open ? 'menu-list-grow' : null}
                  aria-haspopup="true"
                  onClick={this.handleToggle}
                  style={{color: "white"}}
                >
                  Admin Tools
              </Button>
              </div>
            </Target>
            <Popper
              placement="bottom-start"
              eventsEnabled={open}
              className={classNames({ [classes.popperClose]: !open })}
            >
              <ClickAwayListener onClickAway={this.handleClose}>
                <Grow in={open} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                  <Paper>
                    <MenuList role="menu">
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/user_entry_page" style={{color: "black"}}>
                          User Entry
                        </Link>
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/data_entry_page" style={{color: "black", textDecoration: 'none'}}>
                          Data Entry
                        </Link>
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={this.handleClose}>
                        <Link to="/search_and_update" style={{color: "black", textDecoration: 'none'}}>
                          Search/Update
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              </ClickAwayListener>
            </Popper>
          </Manager>
        </div>
    )
  }
};

AdminToolsNav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AdminToolsNav);