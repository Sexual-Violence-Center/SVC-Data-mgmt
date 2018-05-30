import React, { Component } from 'react';
import { Radio, Checkbox } from '@material-ui/core';

class MedicalAccompaniment extends Component {
    constructor(){
        super();
        this.state = {
            checked: false,
            radio: ''
        }
    }

    handleChecked = name => (event) => {
        this.setState({checked: event.target.checked})
        this.props.handleChange(event)
    }

    handleRadio = (event) => {
        this.setState({radio: event.target.value})
        this.props.handleChange(event)
    }

    render() {
        let transportation;
        if(this.state.checked){
            transportation = <div>
                <label>
                    Was transportation provided?:
                </label>
                <Radio
                    checked={this.state.radio === "true"}
                    onChange={this.handleRadio}
                    value="true"
                    name="transportation_medical_accompaniment_medical"
                    aria-label="Yes"
                />
                Yes
                <Radio
                    checked={this.state.radio === "false"}
                    onChange={this.handleRadio}
                    value="false"
                    name="transportation_medical_accompaniment_medical"
                    aria-label="No"
                />
                No
            </div>
        }
        return (
            <div>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('medical_accompaniment_medical')}
                    name="medical_accompaniment_medical"
                    value={`${!this.state.checked}`}
                />
                <label> 
                    Accompaniment to Medical Appointment
                </label>
                <br />
                {transportation}
            </div>
        )
    }
}

export default MedicalAccompaniment;