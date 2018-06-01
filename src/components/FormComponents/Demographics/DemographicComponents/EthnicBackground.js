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
  victim_ethnicity: "",
  victim_ethnicity_other_specify: ""
};

class EthnicBackground extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  static getDerivedStateFromProps = (props, state) => {
    if (props.dispatchTo === "UPDATE_THE_FORM") {
      const { updateFormReducer } = props.state;
      Object.keys(updateFormReducer).forEach(key => {
        if (updateFormReducer[key] === null) {
          updateFormReducer[key] = undefined;
        }
        return null;
      });
      return updateFormReducer;
    } else if (!props.state.EntryFormReducer) {
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
      <div>
        <h3>Ethnic Background</h3>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="victim_ethnicity">Select One</InputLabel>
          <Select
            value={this.state.victim_ethnicity}
            onChange={this.handleChangeFor}
            autoWidth
            inputProps={{
              name: "victim_ethnicity",
              id: "victim_ethnicity"
            }}
          >
            <MenuItem style={{ width: "100%" }} value="Asian">
              Asian
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="African American/Black">
              African American/Black
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="Chican@/Latin@">
              Chican@/Latin@
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="Multi-racial">
              Multi-racial
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="Native American">
              Native American/ Alaskan Native
            </MenuItem>
            <Divider />
            <MenuItem
              style={{ width: "100%" }}
              value="Native Hawaiian/Pacific Islander"
            >
              Native Hawaiian/Pacific Islander
            </MenuItem>
            <Divider />
            <MenuItem
              style={{ width: "100%" }}
              value="White non-Latino/Caucasian"
            >
              White Non-Latino/Caucasian
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="Other">
              Other
            </MenuItem>
            <Divider />
            <MenuItem style={{ width: "100%" }} value="unknown">
              Unknown/Pass
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="victim_ethnicity_other_specify"
          label="If Other, please specify"
          className={classes.textField}
          type="text"
          margin="normal"
          value={this.state.victim_ethnicity_other_specify}
          onChange={this.handleChangeFor}
        />
      </div>
    );
  }
}

EthnicBackground.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(EthnicBackground));