import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';
import CrisisCounseling from './PhoneServicesComponents/CrisisCounseling';
import InformationReferral from './PhoneServicesComponents/InformationReferral';
import CriminalJustice from './PhoneServicesComponents/CriminalJustice';
import OtherEmergency from './PhoneServicesComponents/OtherEmergency';
import FinancialEmergency from './PhoneServicesComponents/FinancialEmergency';
import ReparationsClaims from './PhoneServicesComponents/ReparationsClaims';


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
                        <CrisisCounseling handleChangeFor={this.handleChangeFor}/>
                        <InformationReferral handleChangeFor={this.handleChangeFor}/>
                        <CriminalJustice handleChangeFor={this.handleChangeFor}/>
                        <OtherEmergency handleChangeFor={this.handleChangeFor}/>
                        <FinancialEmergency handleChangeFor={this.handleChangeFor}/>
                        <ReparationsClaims handleChangeFor={this.handleChangeFor}/>
                    </div>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PhoneServices);