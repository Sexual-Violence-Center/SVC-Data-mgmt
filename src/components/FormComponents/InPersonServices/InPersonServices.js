import React, { Component } from 'react';

class InPersonServices extends Component {
    render(){
        return (
            <div className="in-personServicesContainer">
            <h2>In-Person Services</h2>
            <div className="inpersonServices">
                <div className="crisisCounseling">
                    <label>1. Crisis Counseling</label>
                    <br />
                    <br />
                    <input type="checkbox" id="crisis_counseling_individual" name="crisis_counseling_individual" value="crisis_counseling_individual" /><label for="crisis_counseling_individual">One-to-One Counseling</label>
                    <input type="checkbox" id="crisis_counseling_group" name="crisis_counseling_group" value="crisis_counseling_group" /><label for="crisis_counseling_group">Support Group</label>
                </div>
                <br />
                <div className="justiceProcess">
                    <label>2. Legal Advocacy: Criminal Justice Process</label>
                    <br />
                    <br />
                    <input type="checkbox" id="legal_law_enforcement_interview" name="legal_law_enforcement_interview" value="legal_law_enforcement_interview" /><label for="legal_law_enforcement_interview">Law Enforcement Interview</label>
                    <input type="checkbox" id="legal_prosecution_related" name="legal_prosecution_related" value="legal_prosecution_related" /><label for="legal_prosecution_related">Prosecution-related Advocacy</label>
                    <input type="checkbox" id="legal_court_advocacy" name="legal_court_advocacy" value="legal_court_advocacy" /><label for="legal_court_advocacy">Court Advocacy(criminal case)</label>
                </div>
                <br />
                <div className="civilLegalProcess">
                    <label>3. Legal Advocacy: Civil Legal Process</label>
                    <br />
                    <br />
                    <input type="checkbox" id="legal_ofp_hro" name="legal_ofp_hro" value="legal_ofp_hro" /><label for="legal_ofp_hro">Assistance Obtaining OFP or HRO</label>
                    <input type="checkbox" id="legal_immigration" name="legal_immigration" value="legal_immigration" /><label for="legal_immigration">Immigration-related support(U Visa, etc.)</label>
                    <input type="checkbox" id="legal_intervention" name="legal_intervention" value="legal_intervention" /><label for="legal_intervention">Intervention with landlord, academic institution, or creditor</label>
                </div>
                <br />
                <div className="medicalAdvocacy">
                    <label>4. Medical Advocacy</label>
                    <br />
                    <br />
                    <input type="checkbox" id="medical_exam_support" name="medical_exam_support" value="medical_exam_support" /><label for="medical_exam_support">Forensic Exam Support</label>
                    <br/>
                    <label>
                        Was transportation provided?:
                        <input type="radio" id="transportation_medical_exam_support" name="transportation_medical_exam_support" value="transportation_medical_exam_support" /><label for="transportation_medical_exam_support">yes</label>
                        <input type="radio" id="transportation_medical_exam_support" name="transportation_medical_exam_support" value="transportation_medical_exam_support" /><label for="transportation_medical_exam_support">no</label>
                    </label>
                    <br/>
                    <input type="checkbox" id="accompaniment_to_medical_appointment" name="accompaniment_to_medical_appointment" value="accompaniment_to_medical_appointment" /><label for="accompaniment_to_medical_appointment">Accompaniment to Medical Appointment</label>
                    <br/>
                    <label>
                        Was transportation provided?:
                        <input type="radio" id="transportation_medical_appointment_medical" name="transportation_medical_appointment_medical" value="transportation_medical_appointment_medical" /><label for="transportation_medical_appointment_medical">yes</label>
                        <input type="radio" id="transportation_medical_appointment_medical" name="transportation_medical_appointment_medical" value="transportation_medical_appointment_medical" /><label for="transportation_medical_appointment_medical">no</label>
                    </label>
                    <br/>
                    <input type="checkbox" id="medical_appointment_dental" name="medical_appointment_dental" value="medical_appointment_dental" /><label for="medical_appointment_dental">Accompaniment to Dental Appointment</label>
                    <br/>
                    <label>
                        Was transportation provided?:
                        <input type="radio" id="transportation_medical_appointment_dental" name="transportation_medical_appointment_dental" value="transportation_medical_appointment_dental" /><label for="transportation_medical_appointment_dental">yes</label>
                        <input type="radio" id="transportation_medical_appointment_dental" name="transportation_medical_appointment_dental" value="transportation_medical_appointment_dental" /><label for="transportation_medical_appointment_dental">no</label>
                    </label>
                    <br/>
                </div>
                <br/>
                <div className="advocacyServices">
                    <label>5. Other In-Person Advocacy Services</label>
                        <p>(check any that apply)</p>
                    <input type="checkbox" id="information_referral" name="information_referral" value="information_referral"/><label for="information_referral">Information and referral</label>
                    <br/>
                    <input type="checkbox" id="safe_at_home" name="safe_at_home" value="safe_at_home" /><label for="safe_at_home">Safe at Home registration</label>
                    <br/>
                    <input type="checkbox" id="emergency_financial" name="emergency_financial" value="emergency_financial" /><label for="emergency_financial">Emergency financial assistance</label>
                    <br/>
                    <input type="checkbox" id="reparations_claims" name="reparations_claims" value="reparations_claims" /><label for="reparations_claims">Reparations Claims Assistance</label>
                </div>
                <br/>
                <div className="usedSinceOctContainer">
                    <label>6. Has the victim/survivor used this type of in-person service since October 1, 2017?</label>
                    <br />
                    <br />
                    <input type="radio" id="in_person_services_received_prior_oct" name="in_person_services_received_prior_oct" value="in_person_services_received_prior_oct" /><label for="in_person_services_received_prior_oct">yes</label>
                    <input type="radio" id="in_person_services_received_prior_oct" name="in_person_services_received_prior_oct" value="in_person_services_received_prior_oct" /><label for="in_person_services_received_prior_oct">no</label>
                </div>
                <br/>
            </div>
        </div>
        )
    }
}

export default InPersonServices;