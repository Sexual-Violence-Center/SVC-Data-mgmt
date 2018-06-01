import React, { Component } from 'react';
import { Radio, Checkbox } from '@material-ui/core';

class ForensicExam extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      radio: ''
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.transportation_medical_exam_support != undefined) {
      state = { ...state, radio: JSON.stringify(props.transportation_medical_exam_support) };
    }
    if (props.medical_exam_support != undefined) {
      state = { ...state, checked: props.medical_exam_support };
    }
    return state;
  }

  handleChecked = name => event => {
    this.setState({ checked: event.target.checked });
    this.props.handleChange(event);
  };

  handleRadio = event => {
    this.setState({ radio: event.target.value });
    this.props.handleChange(event);
  };

  render() {
    let transportation;
    if (this.state.checked) {
      transportation = (
        <div>
          <label>Was transportation provided?:</label>
          <Radio
            checked={this.state.radio ==='true'}
            onChange={this.handleRadio}
            value="true"
            name="transportation_medical_exam_support"
            aria-label="Yes"
          />
          Yes
          <Radio
            checked={this.state.radio === 'false'}
            onChange={this.handleRadio}
            value="false"
            name="transportation_medical_exam_support"
            aria-label="No"
          />
          No
        </div>
      );
    } else {
      transportation = <div />;
    }
    return (
      <div>
        <Checkbox
          checked={this.state.checked}
          onChange={this.handleChecked("medical_exam_support")}
          name="medical_exam_support"
          value={`${!this.state.checked}`}
        />
        <label>Forensic Exam Support</label>
        <br />
        {transportation}
      </div>
    );
  }
}

export default ForensicExam;