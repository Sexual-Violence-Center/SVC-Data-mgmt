import React, { Component } from 'react';

class MedicalAccompaniment extends Component {
    constructor(){
        super();
        this.state = {
            checked: false
        }
    }

    handleChecked = (event) => {
        this.setState({checked: !this.state.checked})
        this.props.handleChange(event)
    }

    handleRadio = (event) => {
        this.props.handleChange(event)
    }

    render() {
        let transportation;
        if(this.state.checked){
            transportation = <div>
                <label>
                    Was transportation provided?:
                </label>
                <form value={this.props.transportation_medical_accompaniment_medical} onChange={this.handleRadio}>
                    <input type="radio" name="transportation_medical_accompaniment_medical" value={true} /><label htmlFor="transportation_medical_accompaniment_medical">yes</label>
                    <input type="radio" name="transportation_medical_accompaniment_medical" value={false} /><label htmlFor="transportation_medical_accompaniment_medical">no</label>
                </form>
            </div>
        }
        return (
            <div>
                <input type="checkbox" name="medical_accompaniment_medical" value={this.props.medical_accompaniment_medical} onChange={this.handleChecked} />
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