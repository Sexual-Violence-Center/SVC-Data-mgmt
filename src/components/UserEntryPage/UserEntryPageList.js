import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const mapStateToProps = state => ({
  state
})

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
          <Button onClick={this.handleClose} color="primary">
            No, keep the user.
          </Button>
          <Button onClick={this.handleDelete} color="primary" autoFocus>
            Yes, delete the user.
          </Button>
        </DialogActions>
      </Dialog>
        )

    return (
 
      <div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.user.username}</td>
              <td>{user_type}</td>
              <td><Button onClick={this.handleClickOpen} variant="raised" color="primary">Delete</Button></td>
              </tr>
          </tbody>
        </table>
      <div>
        { dialog }
      </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserEntryPageList);