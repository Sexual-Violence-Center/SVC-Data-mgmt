import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class PhoneServicesCustom extends Component {
    constructor() {
        super();
        this.state = {
            phone_services: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            phone_services: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Phone Services Report: </h4>
                <form value={this.state.phone_services} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "crisis_counseling"
                            value = "crisis_counseling"
                        />
                        < label htmlFor = "crisis_counseling" >
                            Crisis Counseling
                        </label>

                        <input type="checkbox" 
                            id = "information_referral_person"
                            value = "information_referral_person"
                        />
                        < label htmlFor = "information_referral_person" >
                            Information and/or Referral
                        </label>

                        <input type="checkbox" 
                            id = "information_criminal_justice"
                            value = "information_criminal_justice"
                        />
                        < label htmlFor = "information_criminal_justice" >
                            Information about the Criminal Justice Process
                        </label>

                        <input type="checkbox" 
                            id = "other_emergency_justice"
                            value = "other_emergency_justice"
                        />
                        < label htmlFor = "other_emergency_justice" >
                            Other Emergency Justice - Related Assistance
                        </label>

                        <input type="checkbox" 
                            id = "emergency_financial"
                            value = "emergency_financial"
                        />
                        < label htmlFor = "emergency_financial" >
                            Emergency Financial Assistance
                        </label>

                        <input type="checkbox" 
                            id = "reparations_claims"
                            value = "reparations_claims"
                        />
                        < label htmlFor = "reparations_claims" >
                            Reparations Claims Assistance
                        </label>

                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(PhoneServicesCustom)