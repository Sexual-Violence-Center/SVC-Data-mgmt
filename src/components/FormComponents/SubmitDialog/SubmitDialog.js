import React from 'react';
import { connect } from 'react-redux';

import FormButton from '../FormButton/FormButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const mapStateToProps = state => ({
  user: state.user,
  state
});

class SubmitDialog extends React.Component {
  state = {
    open: false,
  };

  handleSubmit = () => {
    console.log(this.props.state.EntryFormReducer);
    this.handleClickOpen
    this.props.dispatch({
      type: "ADD_NEW_VICTIM",
      payload: { ...this.props.state.EntryFormReducer }
    });
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
          <FormButton handleSubmit={this.handleSubmit} text="Submit"/>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{`Confirmation Number is ${this.props.state.newVictimEntry}`}</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SubmitDialog);