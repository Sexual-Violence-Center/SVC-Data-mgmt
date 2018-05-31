import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Grid } from '@material-ui/core';
import CrisisCounseling from './InPersonServicesComponents/CrisisCounseling';
import CriminalJusticeProcess from './InPersonServicesComponents/CriminalJusticeProcess';
import CivilLegalProcess from './InPersonServicesComponents/CivilLegalProcess';
import MedicalAdvocacy from './InPersonServicesComponents/MedicalAdvocacy/MedicalAdvocacy';
import OtherAdvocacy from './InPersonServicesComponents/OtherAdvocacy';
import UsedServicesBefore from './InPersonServicesComponents/UsedServicesBefore';

const mapStateToProps = state => ({
    state
});

const initialState = {
  crisis_counseling_individual: undefined,
  crisis_counseling_group: undefined,
  legal_law_enforcement_interview: undefined,
  legal_prosecution_related: undefined,
  legal_court_advocacy: undefined,
  legal_ofp_hro: undefined,
  legal_immigration: undefined,
  legal_intervention: undefined,
  medical_exam_support: undefined,
  transportation_medical_exam_support: undefined,
  medical_accompaniment_medical: undefined,
  transportation_medical_accompaniment_medical: undefined,
  medical_accompaniment_dental: undefined,
  transportation_medical_accompaniment_dental: undefined,
  information_referral: undefined,
  safe_at_home: undefined,
  emergency_financial: undefined,
  reparations_claims: undefined,
  in_person_services_received_prior_oct: undefined
};

class InPersonServices extends Component {
    constructor() {
        super();
        this.state = {
          ...initialState
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        if (props.dispatchTo === "UPDATE_THE_FORM") {
          const { updateFormReducer } = props.state;
          Object.keys(updateFormReducer).forEach(key => {
            if (updateFormReducer[key] === null) {
              updateFormReducer[key] = undefined;
            }
            return null;
          });
          console.log(updateFormReducer);
          return updateFormReducer;
        } else if (!props.state.EntryFormReducer) {
          return initialState;
        } else {
          return state;
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked :
            target.type === ('radio') ? JSON.parse(target.value) :
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
        return <div className="in-personServicesContainer">
            <Card style={{ padding: "20px", margin: "10px" }}>
              <div>
                <h2>In-Person Services</h2>
                <Grid container direction="column" justify="center" alignItems="flex-start">
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CrisisCounseling handleChangeFor={this.handleChangeFor} crisis_counseling_individual={this.state.crisis_counseling_individual} crisis_counseling_group={this.state.crisis_counseling_group} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CriminalJusticeProcess handleChangeFor={this.handleChangeFor} legal_law_enforcement_interview={this.state.legal_law_enforcement_interview} legal_prosecution_related={this.state.legal_prosecution_related} legal_court_advocacy={this.state.legal_court_advocacy} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <CivilLegalProcess handleChangeFor={this.handleChangeFor} legal_ofp_hro={this.state.legal_ofp_hro} legal_immigration={this.state.legal_immigration} legal_intervention={this.state.legal_intervention} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <MedicalAdvocacy 
                        handleChangeFor={this.handleChangeFor} 
                        transportation_medical_exam_support={this.state.transportation_medical_exam_support} 
                        transportation_medical_accompaniment_dental={this.state.transportation_medical_accompaniment_dental} 
                        transportation_medical_accompaniment_medical={this.state.transportation_medical_accompaniment_medical}
                        medical_exam_support={this.state.medical_exam_support}
                        medical_accompaniment_medical={this.state.medical_accompaniment_medical}
                        medical_accompaniment_dental={this.state.medical_accompaniment_dental}
                        />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <OtherAdvocacy handleChangeFor={this.handleChangeFor} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <UsedServicesBefore handleChangeFor={this.handleChangeFor} />
                  </Grid>
                </Grid>
              </div>
            </Card>
          </div>;
    }
}


export default connect(mapStateToProps)(InPersonServices);