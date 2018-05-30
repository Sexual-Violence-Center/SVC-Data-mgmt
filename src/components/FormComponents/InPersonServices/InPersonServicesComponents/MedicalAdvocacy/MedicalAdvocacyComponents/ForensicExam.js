import React, { Component } from 'react';
import { Radio } from '@material-ui/core';

class ForensicExam extends Component {
    constructor() {
        super();
        this.state = {
            checked: false,
            radio: ''
        }
    }

    handleChecked = (event) => {
        this.setState({checked: !this.state.checked});
        this.props.handleChange(event);
    }

    handleRadio = (event) => {
        this.setState({radio: event.target.value});
        this.props.handleChange(event);
    }

    render() {
        let transportation;
        if (this.state.checked) {
            transportation = 
            <div>
                <label>
                    Was transportation provided?:
                </label>
                <Radio
                    checked={this.state.radio === "true"}
                    onChange={this.handleRadio}
                    value="true"
                    name="transportation_medical_exam_support"
                    aria-label="Yes"
                />
                Yes
                <Radio
                    checked={this.state.radio === "false"}
                    onChange={this.handleRadio}
                    value="false"
                    name="transportation_medical_exam_support"
                    aria-label="No"
                />
                No
            </div>
        } else {
            transportation = <div></div>
        }
        return (
            <div>
                <input type="checkbox" name="medical_exam_support" value={this.props.medical_exam_support} onChange={this.handleChecked} />
                <label>
                    Forensic Exam Support
                </label>
                <br />
                {transportation}
            </div>
        )
    }
}

export default ForensicExam;