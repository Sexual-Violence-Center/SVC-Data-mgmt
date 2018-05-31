import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, withStyles} from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  state
})

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: '100%',
  },
  body: {
    width: '50%',
    fontSize: 15,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
      width: '100%',
    },
  },
});

class UserEntryPageList extends Component {
  state = {
    open: false,
    redirect: false
  };

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('login');
    }
}
//delete confirmation dialog
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = ()=> {
    this.setState({
      open: false
    });
  };

  handleDelete = () => {
    console.log('clicked delete button', this.props.user);
    this.props.dispatch({
      type: 'DELETE_USER_SAGA',
      payload: this.props.user
      })
      this.setState({
        redirect: !this.state.redirect
      });
  };

  render(){
    //This is necessary, because boolean values do not render on the DOM
    let user_type;
      if(this.props.user.user_type === true) {
        user_type = <p>Admin</p>
      } else if(this.props.user.user_type === false) {
        user_type = <p>Standard</p>
      } else {
        user_type = <p></p>
      };

      let dialog = (
      <Dialog
      open={this.state.open}
      onClose={this.handleClose}
      aria-labelledby="delete-dialog-title"
      >
      <DialogTitle id="delete-dialog-title">Are you sure you want to delete this user?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will delete the selected user.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>
            No, keep the user.
          </Button>
          <Button onClick={this.handleDelete} autoFocus>
            Yes, delete the user.
          </Button>
        </DialogActions>
      </Dialog>
        )

    const { classes } = this.props;

    return (
 
      <div>

            <TableRow>
              <CustomTableCell>{this.props.user.username}</CustomTableCell>
              <CustomTableCell>{user_type}</CustomTableCell>
              <CustomTableCell><Button size="small" onClick={this.handleClickOpen}>Delete</Button></CustomTableCell>
            </TableRow>

      <div>
        { dialog }
      </div>
      </div>
    )
  }
}

UserEntryPageList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(UserEntryPageList));