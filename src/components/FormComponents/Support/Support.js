import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, InputLabel, Select, FormControl, Divider, } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    card: {
        padding: '20px',
        margin: '10px'
    }
});
const mapStateToProps = state => ({
    state
});

const initialState = {
  supported_on_call: ""
};

class Support extends Component {
  constructor() {
    super();
    this.state = {
      supported_on_call: ""
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    //if on update the form sets state to the update form reducer
    //changes any null values to undefined
    if (props.dispatchTo === "UPDATE_THE_FORM") {
      const { updateFormReducer } = props.state;
      Object.keys(updateFormReducer).forEach(key => {
        if (updateFormReducer[key] === null) {
          updateFormReducer[key] = undefined;
        }
        return null;
      });
      return updateFormReducer;
    } //If nothing in entryform reducer resets state
    else if (!props.state.EntryFormReducer) {
      return initialState;
    } else {
      return state;
    }
  };

  handleChangeFor = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.props.dispatch({
      type: this.props.dispatchTo,
      payload: { ...this.state, [name]: value }
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="support">
        <Card className={classes.card}>
          <h2>
            <strong>MANDATORY:</strong> Did you feel that you were supported on
            this call?
          </h2>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="supported_on_call">Select One</InputLabel>
            <Select
              value={this.state.supported_on_call}
              onChange={this.handleChangeFor}
              className={classes.textField}
              inputProps={{
                name: "supported_on_call",
                id: "supported_on_call"
              }}
            >
              <MenuItem style={{ width: "100%" }} value="yes">
                Yes
              </MenuItem>
              <Divider />
              <MenuItem style={{ width: "100%" }} value="no">
                No
              </MenuItem>
              <Divider />
              <MenuItem style={{ width: "100%" }} value="unknown">
                Unknown/Hung Up
              </MenuItem>
            </Select>
          </FormControl>
        </Card>
      </div>
    );
  }
}

Support.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Support));