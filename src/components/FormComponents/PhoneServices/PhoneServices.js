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

const initialState = {
  crisis_counseling: false,
  information_referral: false,
  information_criminal_justice: false,
  other_emergency_justice: false,
  emergency_financial: false,
  reparations_claims: false
};

class PhoneServices extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  static getDerivedStateFromProps = (props, state) => {
    //if on update the form sets state to the update form reducer
    //changes any null values to undefined
    if (props.dispatchTo === "UPDATE_THE_FORM") {
      const { updateFormReducer } = props.state;
      Object.keys(updateFormReducer).forEach(key => {
        if (updateFormReducer[key] === null) {
          updateFormReducer[key] = undefined;
        }
        return null;
      });
      return updateFormReducer;
    } //If nothing in entryform reducer resets state
    else if (!props.state.EntryFormReducer) {
      return initialState;
    } else {
      return state;
    }
  };

  handleChangeFor = event => {
    const target = event.target;
    const value =
      target.type === "checkbox"
        ? target.checked
        : target.type === "radio"
          ? target.checked
          : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.props.dispatch({
      type: this.props.dispatchTo,
      payload: { ...this.state, [name]: value }
    });
  };
  render() {
    return (
      <div className="phoneServices">
        <Card style={style}>
          <div>
            <h2>Telephone Services</h2>
            <p>(check all that apply)</p>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <CrisisCounseling handleChangeFor={this.handleChangeFor} crisis_counseling={this.state.crisis_counseling}/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InformationReferral handleChangeFor={this.handleChangeFor} information_referral={this.state.information_referral}/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <CriminalJustice handleChangeFor={this.handleChangeFor} information_criminal_justice={this.state.information_criminal_justice}/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OtherEmergency handleChangeFor={this.handleChangeFor} other_emergency_justice={this.state.other_emergency_justice}/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <FinancialEmergency handleChangeFor={this.handleChangeFor} emergency_financial={this.state.emergency_financial}/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ReparationsClaims handleChangeFor={this.handleChangeFor} reparations_claims={this.state.reparations_claims}/>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PhoneServices);