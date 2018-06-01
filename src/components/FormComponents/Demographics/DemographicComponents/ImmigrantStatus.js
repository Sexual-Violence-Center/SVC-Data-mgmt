import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, InputLabel, Select, FormControl, Divider, TextField } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 200,
    },
});

const mapStateToProps = state => ({
    state
});

const initialState = {
  victim_immigrant: "",
  victim_immigrant_other_specify: ""
};

class ImmigrantStatus extends Component {
  constructor() {
    super();
    this.state = initialState;
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
    const value =
      target.type === "checkbox"
        ? target.checked
        : target.type === "radio"
          ? target.checked
          : target.value;
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
      <div>
        <h3>Immigrant Status</h3>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="victim_immigrant">Select One</InputLabel>
          <Select
            value={this.state.victim_immigrant}
            onChange={this.handleChangeFor}
            autoWidth
            inputProps={{
              name: "victim_immigrant",
              id: "victim_immigrant"
            }}
          >
            <MenuItem style={{ width: "100%" }} value="africa">
              Africa
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="asia">
              Asia
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="europe">
              Europe
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="mex/cen/south america">
              Mex/Cen/South America
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="middle east">
              Middle East
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="other">
              Other
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="no">
              No
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="unknown/pass">
              Unknown/Pass
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="victim_immigrant_other_specify"
          label="If Other, please specify"
          className={classes.textField}
          type="text"
          margin="normal"
          value={this.state.victim_immigrant_other_specify}
          onChange={this.handleChangeFor}
        />
      </div>
    );
  }
}

ImmigrantStatus.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ImmigrantStatus));