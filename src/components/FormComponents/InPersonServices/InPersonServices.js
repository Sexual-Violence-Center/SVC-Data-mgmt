import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';

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
            type: 'ENTRY_FORM_DATA',
            payload: { ...this.state, [name]: value }
        })
    }
    render() {
        return (
            <div className="in-personServicesContainer">
                <Card style={{ padding: '20px', margin: '10px' }}>
                    <h2>In-Person Services</h2>
                    <div className="inpersonServices">
                        <div className="crisisCounseling">
                            <label>1. Crisis Counseling</label>
                            <br />
                            <br />
                            <input type="checkbox" id="crisis_counseling_individual" name="crisis_counseling_individual" value={this.state.crisis_counseling_individual} onChange={this.handleChangeFor} /><label htmlFor="crisis_counseling_individual">One-to-One Counseling</label>
                            <input type="checkbox" id="crisis_counseling_group" name="crisis_counseling_group" value={this.state.crisis_counseling_group} onChange={this.handleChangeFor} /><label htmlFor="crisis_counseling_group">Support Group</label>
                        </div>
                        <br />
                        <div className="justiceProcess">
                            <label>2. Legal Advocacy: Criminal Justice Process</label>
                            <br />
                            <br />
                            <input type="checkbox" id="legal_law_enforcement_interview" name="legal_law_enforcement_interview" value={this.state.legal_law_enforcement_interview} onChange={this.handleChangeFor} /><label htmlFor="legal_law_enforcement_interview">Law Enforcement Interview</label>
                            <input type="checkbox" id="legal_prosecution_related" name="legal_prosecution_related" value={this.state.legal_prosecution_related} onChange={this.handleChangeFor} /><label htmlFor="legal_prosecution_related">Prosecution-related Advocacy</label>
                            <input type="checkbox" id="legal_court_advocacy" name="legal_court_advocacy" value={this.state.legal_court_advocacy} onChange={this.handleChangeFor} /><label htmlFor="legal_court_advocacy">Court Advocacy(criminal case)</label>
                        </div>
                        <br />
                        <div className="civilLegalProcess">
                            <label>3. Legal Advocacy: Civil Legal Process</label>
                            <br />
                            <br />
                            <input type="checkbox" id="legal_ofp_hro" name="legal_ofp_hro" value={this.state.legal_ofp_hro} onChange={this.handleChangeFor} /><label htmlFor="legal_ofp_hro">Assistance Obtaining OFP or HRO</label>
                            <input type="checkbox" id="legal_immigration" name="legal_immigration" value={this.state.legal_immigration} onChange={this.handleChangeFor} /><label htmlFor="legal_immigration">Immigration-related support(U Visa, etc.)</label>
                            <input type="checkbox" id="legal_intervention" name="legal_intervention" value={this.state.legal_intervention} onChange={this.handleChangeFor} /><label htmlFor="legal_intervention">Intervention with landlord, academic institution, or creditor</label>
                        </div>
                        <br />
                        <div className="medicalAdvocacy">
                            <label>4. Medical Advocacy</label>
                            <br />
                            <br />
                            <input type="checkbox" id="medical_exam_support" name="medical_exam_support" value={this.state.medical_exam_support} onChange={this.handleChangeFor} /><label htmlFor="medical_exam_support">Forensic Exam Support</label>
                            <br />
                            <label>
                                Was transportation provided?:
                    </label>
                            <form value={this.state.transportation_medical_exam_support} onChange={this.handleChangeFor}>
                                <input type="radio" id="transportation_medical_exam_support" name="transportation_medical_exam_support" value={true} /><label htmlFor="transportation_medical_exam_support">yes</label>
                                <input type="radio" id="transportation_medical_exam_support" name="transportation_medical_exam_support" value={false} /><label htmlFor="transportation_medical_exam_support">no</label>
                            </form>
                            <br />
                            <input type="checkbox" id="medical_accompaniment_medical" name="medical_accompaniment_medical" value={this.state.medical_accompaniment_medical} onChange={this.handleChangeFor} /><label htmlFor="medical_accompaniment_medical">Accompaniment to Medical Appointment</label>
                            <br />
                            <label>
                                Was transportation provided?:
                    </label>
                            <form value={this.state.transportation_medical_accompaniment_medical} onChange={this.handleChangeFor}>
                                <input type="radio" id="transportation_medical_accompaniment_medical" name="transportation_medical_accompaniment_medical" value={true} /><label htmlFor="transportation_medical_accompaniment_medical">yes</label>
                                <input type="radio" id="transportation_medical_accompaniment_medical" name="transportation_medical_accompaniment_medical" value={false} /><label htmlFor="transportation_medical_accompaniment_medical">no</label>
                            </form>
                            <br />
                            <input type="checkbox" id="medical_accompaniment_dental" name="medical_accompaniment_dental" value={this.state.medical_accompaniment_dental} onChange={this.handleChangeFor} /><label htmlFor="medical_accompaniment_dental">Accompaniment to Dental Appointment</label>
                            <br />
                            <label>
                                Was transportation provided?:
                    </label>
                            <form value={this.state.transportation_medical_accompaniment_dental} onChange={this.handleChangeFor}>
                                <input type="radio" id="transportation_medical_accompaniment_dental" name="transportation_medical_accompaniment_dental" value={true} /><label htmlFor="transportation_medical_accompaniment_dental">yes</label>
                                <input type="radio" id="transportation_medical_accompaniment_dental" name="transportation_medical_accompaniment_dental" value={false} /><label htmlFor="transportation_medical_accompaniment_dental">no</label>
                            </form>
                            <br />
                        </div>
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