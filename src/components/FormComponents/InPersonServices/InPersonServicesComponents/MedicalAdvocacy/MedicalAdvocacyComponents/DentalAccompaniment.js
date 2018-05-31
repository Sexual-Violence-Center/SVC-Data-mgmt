import React, { Component } from 'react';
import { Radio, Checkbox } from '@material-ui/core';

class DentalAccompaniment extends Component {
  constructor() {
    super();
    // this.state.checked is a boolean to show whether or not the checkbox is checked
    // this.state.radio is a string that will get parsed later. Determines which radio button is checked
    this.state = {
      checked: false,
      radio: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.transportation_medical_accompaniment_dental != undefined) {
      state = { ...state, radio: JSON.stringify(props.transportation_medical_accompaniment_dental) };
    }
    if (props.medical_accompaniment_dental != undefined) {
      state = { ...state, checked: props.medical_accompaniment_dental };
    }
    return state;
  }

  // function to determine is checkbox is checked or not.
  // When checked or not, tell InPersonServices true if checked, false if not.
  handleChecked = name => event => {
    this.setState({ checked: event.target.checked });
    this.props.handleChange(event);
  };

  // function to determine which radio button gets checked.
  // True if 'Yes' button, and false if 'No'.
  handleRadio = event => {
    this.setState({ radio: event.target.value });
    this.props.handleChange(event);
  };

  render() {
    // Only show the radio button option if the checkbox has been checked.
    // Hide it if it's unchecked.
    let transportation;
    if (this.state.checked) {
      transportation = (
        <div>
          <label>Was transportation provided?:</label>
          <Radio
            checked={this.state.radio === "true"}
            onChange={this.handleRadio}
            value="true"
            name="transportation_medical_accompaniment_dental"
            aria-label="Yes"
          />
          Yes
          <Radio
            checked={this.state.radio === "false"}
            onChange={this.handleRadio}
            value="false"
            name="transportation_medical_accompaniment_dental"
            aria-label="No"
          />
          No
        </div>
      );
    }
    return (
      <div>
        <Checkbox
          checked={this.state.checked}
          onChange={this.handleChecked("medical_accompaniment_dental")}
          name="medical_accompaniment_dental"
          value={`${!this.state.checked}`}
        />
        <label>Accompaniment to Dental Appointment</label>
        <br />
        {transportation}
      </div>
    );
  }
}

export default DentalAccompaniment;

