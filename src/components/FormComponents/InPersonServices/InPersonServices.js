import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';
import CrisisCounseling from './InPersonServicesComponents/CrisisCounseling';
import CriminalJusticeProcess from './InPersonServicesComponents/CriminalJusticeProcess';
import CivilLegalProcess from './InPersonServicesComponents/CivilLegalProcess';
import MedicalAdvocacy from './InPersonServicesComponents/MedicalAdvocacy/MedicalAdvocacy';
import OtherAdvocacy from './InPersonServicesComponents/OtherAdvocacy';
import UsedServicesBefore from './InPersonServicesComponents/UsedServicesBefore';

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
                        <OtherAdvocacy handleChangeFor={this.handleChangeFor}/>
                        <br />
                        <UsedServicesBefore handleChangeFor={this.handleChangeFor}/>
                        <br />
                    </div>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(InPersonServices);