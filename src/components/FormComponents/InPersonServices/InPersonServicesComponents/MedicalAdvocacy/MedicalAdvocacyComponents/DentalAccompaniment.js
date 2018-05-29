import React, { Component } from 'react';

class DentalAccompaniment extends Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
    }

    handleChecked = (event) => {
        this.setState({ checked: !this.state.checked })
        this.props.handleChange(event)
    }

    handleRadio = (event) => {
        this.props.handleChange(event)
    }

    render() {
        let transportation;
        if (this.state.checked) {
            transportation = <div>
                <label>
                    Was transportation provided?:
                </label>
                <form value={this.props.transportation_medical_accompaniment_dental} onChange={this.handleRadio}>
                    <input type="radio" name="transportation_medical_accompaniment_dental" value={true} /><label htmlFor="transportation_medical_accompaniment_dental">yes</label>
                    <input type="radio" name="transportation_medical_accompaniment_dental" value={false} /><label htmlFor="transportation_medical_accompaniment_dental">no</label>
                </form>
            </div>
        }
        return (
            <div>
                <input type="checkbox" name="medical_accompaniment_dental" value={this.props.medical_accompaniment_dental} onChange={this.handleChecked} />
                <label>
                    Accompaniment to Dental Appointment
                </label>
                <br />
                {transportation}
            </div>
        )
    }
}

export default DentalAccompaniment;

