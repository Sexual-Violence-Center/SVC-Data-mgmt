import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';
import CrisisCounseling from './InPersonServicesComponents/CrisisCounseling';
import CriminalJusticeProcess from './InPersonServicesComponents/CriminalJusticeProcess';
import CivilLegalProcess from './InPersonServicesComponents/CivilLegalProcess';
import MedicalAdvocacy from './InPersonServicesComponents/MedicalAdvocacy/MedicalAdvocacy';

const mapStateToProps = state => ({
    state
});

class InPersonServices extends Component {
    constructor() {
        super();
        this.state = {
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
            in_person_services_received_prior_oct: undefined,
        }
    }
   
    static getDerivedStateFromProps=(props, state)=>{
        if(props.state.updateFormReducer){
            const {updateFormReducer} = props.state
            Object.keys(updateFormReducer).forEach(key=>{
                if(updateFormReducer[key]===null){
                    updateFormReducer[key] = undefined;
                }
                return null;
            })
            console.log(updateFormReducer);
            return updateFormReducer;
        }else {
            return state;
        }    
        
    } 

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked :
            target.type === ('radio') ? target.checked :
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
            <div className="in-personServicesContainer">
                <Card style={{ padding: '20px', margin: '10px' }}>
                    <h2>In-Person Services</h2>
                    <div className="inpersonServices">
                        <CrisisCounseling handleChangeFor={this.handleChangeFor}/>
                        <br />
                        <CriminalJusticeProcess handleChangeFor={this.handleChangeFor}/>
                        <br />
                        <CivilLegalProcess handleChangeFor={this.handleChangeFor}/>
                        <br />
                        <MedicalAdvocacy handleChangeFor={this.handleChangeFor}/>
                        <br />
                        <div className="advocacyServices">
                            <label>5. Other In-Person Advocacy Services</label>
                            <p>(check any that apply)</p>
                            <input type="checkbox" name="information_referral" value={this.state.information_referral} onChange={this.handleChangeFor} /><label htmlFor="information_referral">Information and referral</label>
                            <br />
                            <input type="checkbox" name="safe_at_home" value={this.state.safe_at_home} onChange={this.handleChangeFor} /><label htmlFor="safe_at_home">Safe at Home registration</label>
                            <br />
                            <input type="checkbox" name="emergency_financial" value={this.state.emergency_financial} onChange={this.handleChangeFor} /><label htmlFor="emergency_financial">Emergency financial assistance</label>
                            <br />
                            <input type="checkbox" name="reparations_claims" value={this.state.reparations_claims} onChange={this.handleChangeFor} /><label htmlFor="reparations_claims">Reparations Claims Assistance</label>
                        </div>
                        <br />
                        <div className="usedSinceOctContainer">
                            <label>6. Has the victim/survivor used this type of in-person service since October 1, 2017?</label>
                            <br />
                            <br />
                            <form value={this.state.in_person_services_received_prior_oct} onChange={this.handleChangeFor}>
                                <input type="radio" name="in_person_services_received_prior_oct" value={!this.state.in_person_services_received_prior_oct} /><label htmlFor="in_person_services_received_prior_oct">yes</label>
                                <input type="radio" name="in_person_services_received_prior_oct" value={this.state.in_person_services_received_prior_oct} /><label htmlFor="in_person_services_received_prior_oct">no</label>
                            </form>
                        </div>
                        <br />
                    </div>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(InPersonServices);