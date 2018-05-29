import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';

const mapStateToProps = state => ({
    state
});

const style = {
    padding: '20px',
    margin: '10px'
}

class PhoneServices extends Component {
    constructor() {
        super();
        this.state = {
            crisis_counseling: undefined,
            information_referral: undefined,
            information_criminal_justice: undefined,
            other_emergency_justice: undefined,
            emergency_financial: undefined,
            reparations_claims: undefined,
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :
            target.type === 'radio' ? target.checked :
                target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.dispatch({
            type: this.props.dispatchTo,
            payload: { ...this.state, [name]: value }
        })
    }
    render() {
        return (
            <div className="phoneServices">
                <Card style={style}>
                    <h2>Telephone Services</h2>
                    <div className="telephoneChoices">
                        <p>(check all that apply)</p>
                        <input type="checkbox" id="crisis_counseling" name="crisis_counseling" value={this.state.crisis_counseling} onChange={this.handleChangeFor} /><label htmlFor="crisis_counseling">Crisis Counseling</label>
                        <br />
                        <input type="checkbox" id="information_referral" name="information_referral" value={this.state.information_referral} onChange={this.handleChangeFor} /><label htmlFor="information_referral">Info and/or referral(including appointments/intakes for service</label>
                        <br />
                        <input type="checkbox" id="information_criminal_justice" name="information_criminal_justice" value={this.state.information_criminal_justice} onChange={this.handleChangeFor} /><label htmlFor="information_criminal_justice">Information about the criminal justice process</label>
                        <br />
                        <input type="checkbox" id="other_emergency_justice" name="other_emergency_justice" value={this.state.other_emergency_justice} onChange={this.handleChangeFor} /><label htmlFor="other_emergency_justice">Other emergency justice-related assistance</label>
                        <br />
                        <input type="checkbox" id="emergency_financial" name="emergency_financial" value={this.state.emergency_financial} onChange={this.handleChangeFor} /><label htmlFor="emergency_financial">Emergency Financial Assistance</label>
                        <br />
                        <input type="checkbox" id="reparations_claims" name="reparations_claims" value={this.state.reparations_claims} onChange={this.handleChangeFor} /><label htmlFor="reparations_claims">Reparations Claims Assistance</label>
                    </div>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PhoneServices);