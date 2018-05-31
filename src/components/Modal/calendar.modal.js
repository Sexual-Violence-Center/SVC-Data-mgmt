import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${10}%, -${30}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class CalendarModal extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    const { classes } = this.props;
    // if (!this.props.show) {
    //   return null;
    // }

    return (
      <div>
        <Modal
          aria-labelledby="modal-no calendar date"
          aria-describedby="modal-dates required to complete report"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-dates required">
              Please Enter Start and End Dates.
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              A start date and end date are required to complete the report.
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

CalendarModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CalendarModalWrapped = withStyles(styles)(CalendarModal);

export default CalendarModalWrapped
