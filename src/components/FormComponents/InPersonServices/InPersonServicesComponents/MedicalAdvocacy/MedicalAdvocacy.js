import React, { Component } from 'react';
import ForensicExam from './MedicalAdvocacyComponents/ForensicExam';
import MedicalAccompaniment from './MedicalAdvocacyComponents/MedicalAccompaniment';
import DentalAccompaniment from './MedicalAdvocacyComponents/DentalAccompaniment';

class MedicalAdvocacy extends Component {

    handleChange = (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div className="medicalAdvocacy">
            <label><strong>4. Medical Advocacy</strong></label>
            <br />
            <br />
            <ForensicExam handleChange={this.handleChange}/>
            <br />
            <MedicalAccompaniment handleChange={this.handleChange}/>
            <br />
            <DentalAccompaniment handleChange={this.handleChange}/>
            <br />
        </div>
        )
    }
}

export default MedicalAdvocacy;