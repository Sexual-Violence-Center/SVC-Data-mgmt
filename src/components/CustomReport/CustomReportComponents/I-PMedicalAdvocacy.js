import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class AdvocacyMedicalCustom extends Component {
    constructor() {
        super();
        this.state = {
            medical_advocacy: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            medical_advocacy: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom In-Person Medical Advocacy Report: </h4>
                <form value={this.state.medical_advocacy} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "emergency_med_care_medical"
                            value = "emergency_med_care_medical"
                        />
                        < label htmlFor = "emergency_med_care_medical" >
                            Accompaniment to Medical Appointment
                        </label>

                        <input type="checkbox" 
                            id = "emergency_med_care_dental"
                            value = "emergency_med_care_dental"
                        />
                        < label htmlFor = "emergency_med_care_dental" >
                            Accompaniment to Dental Appointment
                        </label>

                        <input type="checkbox" 
                            id = "forensic_exam"
                            value = "forensic_exam"
                        />
                        < label htmlFor = "forensic_exam" >
                            Forensic Exam Support
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(AdvocacyMedicalCustom)