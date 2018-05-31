import React, { Component } from 'react';
import ForensicExam from './MedicalAdvocacyComponents/ForensicExam';
import MedicalAccompaniment from './MedicalAdvocacyComponents/MedicalAccompaniment';
import DentalAccompaniment from './MedicalAdvocacyComponents/DentalAccompaniment';

class MedicalAdvocacy extends Component {
  handleChange = event => {
    this.props.handleChangeFor(event);
  };
  render() {
    return <div className="medicalAdvocacy">
        <label>
          <strong>4. Medical Advocacy</strong>
        </label>
        <br />
        <br />
        <ForensicExam 
            handleChange={this.handleChange} 
            transportation_medical_exam_support={this.props.transportation_medical_exam_support}
            medical_exam_support={this.props.medical_exam_support}
             />
        <br />
        <MedicalAccompaniment 
            handleChange={this.handleChange} 
            transportation_medical_accompaniment_medical={this.props.transportation_medical_accompaniment_medical} 
            medical_accompaniment_medical = {this.props.medical_accompaniment_medical}
            />
        <br />
        <DentalAccompaniment 
            handleChange={this.handleChange} 
            transportation_medical_accompaniment_dental={this.props.transportation_medical_accompaniment_dental} 
            medical_accompaniment_dental={this.props.medical_accompaniment_dental}
            />
        <br />
      </div>;
  }
}

export default MedicalAdvocacy;