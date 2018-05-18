import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="entryFormContainer">
                <div className="contactInfo">
                    <h2>Contact Info</h2>
                    <label>
                        Advocate/Counselor Name:
                        <input type="text" name="advocate_name"/>
                    </label>
                    <label>
                        Date:
                        <input type="date" name="date_entered"/>
                    </label>
                    <label>
                        Start Time:
                        <input type="time" name="start_time"/>
                    </label>
                    <label>
                        End Time:
                        <input type="time" name="end_time"/>
                    </label>
                    <br />
                    <label>
                        Contact Date:
                        <input type="date" name="contact_date"/>
                    </label>
                    <label>
                        Location(where services are being provided):
                        <input type="text" name="service_location"/>
                    </label>
                    <label>
                        County:
                        <select name="service_county">
                            <option value="Hennepin">Hennepin</option>
                            <option value="Scott">Scott</option>
                            <option value="Carver">Carver</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label>
                        Client Number:
                        <input type="number" name="in_person_client_number"/>
                    </label>
                    <label>
                        Zip Code:
                        <input type="number" name="victim_zipcode"/>
                    </label>
                    <br />
                    <label>
                        Type of Victim/Survivor:
                        <select name="victim_type">
                            <option value="adult primary victim">Adult Primary Victim</option>
                            <option value="youth primary victim">Youth Primary Victim</option>
                            <option value="adult secondary victim">Adult Secondary Victim</option>
                            <option value="youth secondary victim">Youth Secondary Victim</option>
                        </select>
                    </label>
                    <label>
                        How did they hear about SVC?:
                        <input type="text" name="victim_referral_source"/>
                    </label>
                    <br />
                    <div>
                        <label>
                            Have they contacted SVC before?:
                        </label>
                        <input type="radio" id="victim_prior_contact" name="victim_prior_contact" value="victim_prior_contact" /><label for="victim_prior_contact">yes</label>
                        <input type="radio" id="victim_prior_contact" name="victim_prior_contact" value="victim_prior_contact" /><label for="victim_prior_contact">no</label>
                    </div>
                    <label>
                        If yes, was it before Oct 1, 2017?:
                        <input type="radio" id="victim_contact_prior_oct" name="victim_contact_prior_oct" value="victim_contact_prior_oct" /><label for="victim_contact_prior_oct">yes</label>
                        <input type="radio" id="victim_contact_prior_oct" name="victim_contact_prior_oct" value="victim_contact_prior_oct" /><label for="victim_contact_prior_oct">no</label>
                    </label>
                </div>
                <div className="phoneServices">
                    <h2>Telephone Services</h2>
                    <div className="telephoneChoices">
                        <p>(check all that apply)</p>
                        <input type="checkbox" id="crisis_counseling" name="crisis_counseling" value="crisis_counseling" /><label for="crisis_counseling">Crisis Counseling</label>
                        <br />
                        <input type="checkbox" id="information_referral" name="information_referral" value="information_referral" /><label for="information_referral">Info and/or referral(including appointments/intakes for service</label>
                        <br />
                        <input type="checkbox" id="information_criminal_justice" name="information_criminal_justice" value="information_criminal_justice" /><label for="information_criminal_justice">Information about the criminal justice process</label>
                        <br />
                        <input type="checkbox" id="other_emergency_justice" name="other_emergency_justice" value="other_emergency_justice" /><label for="other_emergency_justice">Other emergency justice-related assistance</label>
                        <br />
                        <input type="checkbox" id="emergency_financial" name="emergency_financial" value="emergency_financial" /><label for="emergency_financial">Emergency Financial Assistance</label>
                        <br />
                        <input type="checkbox" id="reparations_claims" name="reparations_claims" value="reparations_claims" /><label for="reparations_claims">Reparations Claims Assistance</label>
                    </div>
                </div>
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
                <div className="unmetNeeds">
                    <h2>Unmet Needs</h2>
                    <div className="unmetNeedsContainer">
                            <label>Were there any unmet needs for this individual?</label>
                            <br/>
                            <br/>
                            <input type="checkbox" id="unmet_need_financial" name="unmet_need_financial" value="unmet_need_financial"/><label for="unmet_need_financial">Financial</label>
                            <br/>
                            <input type="checkbox" id="unmet_need_shelter_housing" name="unmet_need_shelter_housing" value="unmet_need_shelter_housing" /><label for="unmet_need_shelter_housing">Shelter/Housing</label>
                            <br/>
                            <input type="checkbox" id="unmet_need_other" name="unmet_need_other" value="unmet_need_other" /><label for="unmet_need_other">Other</label>
                            <br/>
                            <label for="unmet_other_descr">
                                specify other:
                            <input type="text" id="unmet_other_descr" name="unmet_other_descr"/>
                            </label>
                            <br/>
                            <label for="unmet_need_staying_where">If shelter was unavailable, where did the v/s stay?</label>
                            <input type="text" id="unmet_need_staying_where" name="unmet_need_staying_where" />
                        </div>
                </div>
                <div className="referrals">
                    <h2>Referrals</h2>
                    <p>(please fill in name of organization)</p>
                    <label for="referral_svc">SVC Services:</label>
                    <input type="text" id="referral_svc"/>
                    <br/>
                    <label for="referral_agency">Other advocacy agency:</label>
                    <input type="text" id="referral_agency"/>
                    <br/>
                    <label for="referral_other">Other services, support and resources(specify):</label>
                    <input type="text" id="referral_other"/>
                    <br/>
                </div>
                <div className="support">
                    <h2>Did They Feel Supported?</h2>
                    <p><strong>MANDATORY</strong> Did you feel that you were supported on this call?</p>
                    <select id="supported_on_call">
                        <option value="supported_on_call">yes</option>
                        <option value="supported_on_call">no</option>
                        <option value="supported_on_call">unknown/hung up</option>
                    </select>
                </div>
                <div className="demographics">
                    <h2>Victim/Survivor Demographics</h2>
                    <h3>Type of Sexual Violence</h3>
                    <input type="checkbox" id="violence_adult_sexual" value="violence_adult_sexual"/><label for="violence_adult_sexual">Adult Sexual Assault</label>
                    <br/>
                    <input type="checkbox" id="violence_adult_when_child_by_family" value="violence_adult_when_child_by_family"/><label for="violence_adult_when_child_by_family">Adult abused as child - family</label>
                    <br/>
                    <input type="checkbox" id="violence_adult_when_child_by_other" value="violence_adult_when_child_by_other"/><label for="violence_adult_when_child_by_other">Adult abused as child - other</label>
                    <br/>
                    <input type="checkbox" id="violence_bullying" value="violence_bullying"/><label for="violence_bullying">Bullying (verbal/cyber/physical)</label>
                    <br/>
                    <input type="checkbox" id="violence_child_pornography" value="violence_child_pornography"/><label for="violence_child_pornography">Child Pornography</label>
                    <br/>
                    <input type="checkbox" id="violence_domestic" value="violence_domestic"/><label for="violence_domestic">Domestic Violence</label>
                    <br/>
                    <input type="checkbox" id="violence_elder" value="violence_elder"/><label for="violence_elder">Elder Abuse</label>
                    <br/>
                    <input type="checkbox" id="violence_exposing" value="violence_exposing"/><label for="violence_exposing">Exposing</label>
                    <br/>
                    <input type="checkbox" id="violence_internet" value="violence_internet"/><label for="violence_internet">Internet Related</label>
                    <br/>
                    <input type="checkbox" id="violence_minor_by_family" value="violence_minor_by_family"/><label for="violence_minor_by_family">Minor/CSA - family</label>
                    <br/>
                    <input type="checkbox" id="violence_minor_by_other" value="violence_minor_by_other"/><label for="violence_minor_by_other">Minor/CSA - other</label>
                    <br/>
                    <input type="checkbox" id="violence_phone" value="violence_phone"/><label for="violence_phone">Obscene Phone Call</label>
                    <br/>
                    <input type="checkbox" id="violence_exploitation_trafficking" value="violence_exploitation_trafficking"/><label for="violence_exploitation_trafficking">Sexual exploitation/trafficking/prostitution</label>
                    <br/>
                    <input type="checkbox" id="violence_harassment" value="violence_harassment"/><label for="violence_harassment">Sexual Harassment</label>
                    <br/>
                    <input type="checkbox" id="violence_stalking" value="violence_stalking"/><label for="violence_stalking">Stalking</label>
                    <br/>
                    <input type="checkbox" id="violence_teen_dating" value="violence_teen_dating"/><label for="violence_teen_dating">Teen Dating</label>
                    <br/>
                    <input type="checkbox" id="violence_other" value="violence_other"/><label for="violence_other">Other</label>
                    <br/>
                    <label>specify:</label>
                    <input type="text" />
                    <br/>
                    <input type="checkbox" id="violence_unknown" value="violence_unknown"/><label for="violence_unknown">Unknown/pass/doesn't know</label>
                    <br/>
                    <h3>Was a police report filed?</h3>
                    <select name="policeReport">
                            <option value="police_report_filed">yes</option>
                            <option value="police_report_filed">no</option>
                            <option value="police_report_filed">unknown</option>
                    </select>
                    <h2>Demographics Survey</h2>
                    <label for="victim_age">Age:</label>
                    <input type="number" id="victim_age"/>
                    <label for="victim_gender">Gender:</label>
                    <input type="text" id="victim_gender"/>
                    <label for="victim_transgender">Transgender:</label>
                    <select id="victim_transgender">
                        <option value="victim_transgender">yes</option>
                        <option value="victim_transgender">no</option>
                        <option value="victim_transgender">unknown/pass</option>
                    </select>
                    <label for="victim_sexual_orientation">Sexual Orientation</label>
                    <input type="text" id="victim_sexual_orientation"/>
                    <label for="victim_gender_pronouns">Gender Pronouns</label>
                    <input type="text" id="victim_gender_pronouns"/>
                    <h3>Disability Status</h3>
                    <input type="checkbox" id="disability_blind" value="disability_blind"/><label for="disability_blind">Blind/Visually Impaired</label>
                    <br/>
                    <input type="checkbox" id="disability_physical" value="disability_physical"/><label for="disability_physical">Physical Disabilities</label>
                    <br/>
                    <input type="checkbox" id="disability_mental" value="disability_mental"/><label for="disability_mental">Mental Illness</label>
                    <br/>
                    <input type="checkbox" id="disability_deaf" value="disability_deaf"/><label for="disability_deaf">Deaf/Hard of Hearing</label>
                    <br/>
                    <input type="checkbox" id="disability_developmental" value="disability_developmental"/><label for="disability_developmental">Intellectual or Developmental Disabilities</label>
                    <br/>
                    <input type="checkbox" id="disability_none" value="disability_none"/><label for="disability_none">None</label>
                    <br/>
                    <input type="checkbox" id="disability_other" value="disability_other"/><label for="disability_other">Other</label>
                    <br/>
                    <label for="disability_other_specify">specify</label>
                    <input type="text" id="disability_other_specify"/>
                    <br/>
                    <input type="checkbox" id="disability_unknown" value="disability_unknown"/><label for="disability_unknown">Unknown</label>
                    <br/>
                    <h3>Ethnic Background</h3>
                    <select>
                        <option value="asian">Asian</option>
                        <option value="african american/black">African American/Black</option>
                        <option value="chican@/latin@">Chican@/Latin@</option>
                        <option value="multi-racial">Multi-racial</option>
                        <option value="native american">Native American</option>
                        <option value="native hawaiian/pacific islander">Native Hawaiian/Pacific Islander</option>
                        <option value="white non-latino/caucasian">White Non-Latino/Caucasian</option>
                        <option value="other">Other</option>
                        <option value="unknown/pass">Unknown/Pass</option>
                    </select>
                    <label>
                        If Other, please specify
                        <input type="text" />
                    </label>
                    <h3>Immigrant Status</h3>
                    <select>
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="mex/cen/south america">Mex/Cen/South America</option>
                        <option value="middle east">Middle East</option>
                        <option value="other">Other</option>
                        <option value="no">No</option>
                        <option value="unknown/pass">Unknown/Pass</option>
                    </select>
                    <label>
                        If Other, please specify
                        <input type="text" />
                    </label>
                    <h3>Other</h3>
                    <input type="checkbox" id="homeless" value="homeless"/><label for="homeless">Currently Homeless</label>
                    <br/>
                    <input type="checkbox" id="limited_english" value="limited_english"/><label for="limited_english">Limited English Proficiency</label>
                    <br/>
                    <input type="checkbox" id="veteran" value="veteran"/><label for="veteran">U.S. Veteran</label>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Form;