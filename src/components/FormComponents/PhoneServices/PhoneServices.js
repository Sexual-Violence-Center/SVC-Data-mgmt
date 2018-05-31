import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid } from '@material-ui/core';
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
                    <div>
                        <h2>Telephone Services</h2>
                        <p>(check all that apply)</p>
                        <Grid container direction="column" justify="center" alignItems="flex-start">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <CrisisCounseling handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <InformationReferral handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <CriminalJustice handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <OtherEmergency handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <FinancialEmergency handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <ReparationsClaims handleChangeFor={this.handleChangeFor} />
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PhoneServices);