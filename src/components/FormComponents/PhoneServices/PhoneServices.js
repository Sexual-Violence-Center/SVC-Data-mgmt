import React, { Component } from 'react';

class PhoneServices extends Component {

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        this.props.dispatch({
            type: 'ENTRY_FORM_DATA', 
            payload: {...this.state, [name]: value }
        })
    }
    render(){
        return(
            <div className="phoneServices">
            <h2>Telephone Services</h2>
            <div className="telephoneChoices">
                <p>(check all that apply)</p>
                <input type="checkbox" id="crisis_counseling" name="crisis_counseling" value="crisis_counseling" /><label htmlFor="crisis_counseling">Crisis Counseling</label>
                <br />
                <input type="checkbox" id="information_referral" name="information_referral" value="information_referral" /><label htmlFor="information_referral">Info and/or referral(including appointments/intakes for service</label>
                <br />
                <input type="checkbox" id="information_criminal_justice" name="information_criminal_justice" value="information_criminal_justice" /><label htmlFor="information_criminal_justice">Information about the criminal justice process</label>
                <br />
                <input type="checkbox" id="other_emergency_justice" name="other_emergency_justice" value="other_emergency_justice" /><label htmlFor="other_emergency_justice">Other emergency justice-related assistance</label>
                <br />
                <input type="checkbox" id="emergency_financial" name="emergency_financial" value="emergency_financial" /><label htmlFor="emergency_financial">Emergency Financial Assistance</label>
                <br />
                <input type="checkbox" id="reparations_claims" name="reparations_claims" value="reparations_claims" /><label htmlFor="reparations_claims">Reparations Claims Assistance</label>
            </div>
        </div>
        )
    }
}

export default PhoneServices;