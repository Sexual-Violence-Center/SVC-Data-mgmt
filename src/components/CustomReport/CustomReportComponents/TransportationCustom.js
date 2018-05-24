import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class TransortationCustom extends Component {
    constructor() {
        super();
        this.state = {
            transportation: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            transportation: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Transportation Report: </h4>
                < form value = { this.state.transportation} 
                    onClick = { this.handleChangeFor}
                >
                        <input type="checkbox" 
                            id = "transportation_medical_accompaniment_medical"
                            value = "transportation_medical_accompaniment_medical"
                        />
                        < label htmlFor = "transportation_medical_accompaniment_medical" >
                            Transportation to Medical Appointment
                        </label>

                        <input type="checkbox" 
                            id = "transportation_medical_accompaniment_dental"
                            value = "transportation_medical_accompaniment_dental"
                        />
                        < label htmlFor = "transportation_medical_accompaniment_dental" >
                            Transportation to Dental Appointment
                        </label>

                        <input type="checkbox" 
                            id = "transportation_medical_exam_support"
                            value = "transportation_medical_exam_support"
                        />
                        < label htmlFor = "transportation_medical_exam_support" >
                            Transportation to Forensic Exam
                        </label>

                        <input type="checkbox" 
                            id = "all_transportation"
                            value = "all_transportation"
                        />
                        < label htmlFor = "all_transportation" >
                            Total Transportation
                        </label>

                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(TransortationCustom)