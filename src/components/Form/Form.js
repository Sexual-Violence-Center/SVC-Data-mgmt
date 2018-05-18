import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="entryFormContainer">
                <div className="contactInfo">
                    <h2>Contact Info</h2>
                    <label>
                        Advocate/Counselor Name:
                        <input type="text" />
                    </label>
                    <label>
                        Date:
                        <input type="date" />
                    </label>
                    <label>
                        Start Time:
                        <input type="time" />
                    </label>
                    <label>
                        End Time:
                        <input type="time" />
                    </label>
                    <br />
                    <label>
                        Location(where services are being provided):
                        <input type="text" />
                    </label>
                    <label>
                        County:
                        <select name="county">
                            <option value="Hennepin">Hennepin</option>
                            <option value="Scott">Scott</option>
                            <option value="Carver">Carver</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label>
                        Client Number:
                        <input type="number" />
                    </label>
                    <label>
                        Zip Code:
                        <input type="number" />
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
                        <input type="text" />
                    </label>
                    <br />
                    <div>
                        <label>
                            Have they contacted SVC before?:
                        </label>
                        <input type="radio" id="haveContactedBefore" name="haveContactedBefore" value="victim_prior_contact" /><label for="haveContactedBefore">yes</label>
                        <input type="radio" id="haveContactedBefore" name="haveContactedBefore" value="victim_prior_contact" /><label for="haveContactedBefore">no</label>
                    </div>
                    <label>
                        If yes, was it before Oct 1, 2017?:
                        <input type="radio" id="BeforeOct" name="BeforeOct" value="victim_contact_prior_oct" /><label for="BeforeOct">yes</label>
                        <input type="radio" id="BeforeOct" name="BeforeOct" value="victim_contact_prior_oct" /><label for="BeforeOct">no</label>
                    </label>
                </div>
                <div className="phoneServices">
                    <h2>Telephone Services</h2>
                    <div className="telephoneChoices">
                        <p>(check all that apply)</p>
                        <input type="checkbox" id="crisisCounseling" name="crisisCounseling" value="crisis_counseling" /><label for="crisisCounseling">Crisis Counseling</label>
                        <br />
                        <input type="checkbox" id="infoReferral" name="infoReferral" value="information_referral" /><label for="infoReferral">Info and/or referral(including appointments/intakes for service</label>
                        <br />
                        <input type="checkbox" id="criminalJusticeInfo" name="criminalJusticeInfo" value="information_criminal_justice" /><label for="criminalJusticeInfo">Information about the criminal justice process</label>
                        <br />
                        <input type="checkbox" id="otherEmergency" name="otherEmergency" value="other_emergency_justice" /><label for="otherEmergency">Other emergency justice-related assistance</label>
                        <br />
                        <input type="checkbox" id="emergencyFinancial" name="emergencyFinancial" value="emergency_financial" /><label for="emergencyFinancial">Emergency Financial Assistance</label>
                        <br />
                        <input type="checkbox" id="reparationsClaims" name="reparationsClaims" value="reparations_claims" /><label for="reparationsClaims">Reparations Claims Assistance</label>
                    </div>
                </div>
                <div className="in-personServicesContainer">
                    <h2>In-Person Services</h2>
                    <div className="inpersonServices">
                        <div className="crisisCounseling">
                            <label>1. Crisis Counseling</label>
                            <br />
                            <br />
                            <input type="checkbox" id="oneToOne" name="oneToOne" value="crisis_counseling_individual" /><label for="oneToOne">One-to-One Counseling</label>
                            <input type="checkbox" id="supportGroup" name="supportGroup" value="crisis_counseling_group" /><label for="supportGroup">Support Group</label>
                        </div>
                        <br />
                        <div className="justiceProcess">
                            <label>2. Legal Advocacy: Criminal Justice Process</label>
                            <br />
                            <br />
                            <input type="checkbox" id="lawEnforcementInterview" name="lawEnforcementInterview" value="legal_law_enforcement_interview" /><label for="lawEnforcementInterview">Law Enforcement Interview</label>
                            <input type="checkbox" id="prosecutionAdvocacy" name="prosecutionAdvocacy" value="legal_prosecution_related" /><label for="prosecutionAdvocacy">Prosecution-related Advocacy</label>
                            <input type="checkbox" id="courtAdvocacy" name="courtAdvocacy" value="legal_court_advocacy" /><label for="courtAdvocacy">Court Advocacy(criminal case)</label>
                        </div>
                        <br />
                        <div className="civilLegalProcess">
                            <label>3. Legal Advocacy: Civil Legal Process</label>
                            <br />
                            <br />
                            <input type="checkbox" id="obtainOorH" name="obtainOorH" value="legal_ofp_hro" /><label for="obtainOorH">Assistance Obtaining OFP or HRO</label>
                            <input type="checkbox" id="immigrantSupport" name="immigrantSupport" value="legal_immigration" /><label for="immigrantSupport">Immigration-related support(U Visa, etc.)</label>
                            <input type="checkbox" id="intervention" name="intervention" value="legal_intervention" /><label for="intervention">Intervention with landlord, academic institution, or creditor</label>
                        </div>
                        <br />
                        <div className="medicalAdvocacy">
                            <label>4. Medical Advocacy</label>
                            <br />
                            <br />
                            <input type="checkbox" id="forensicExam" name="forensicExam" value="medical_exam_support" /><label for="forensicExam">Forensic Exam Support</label>
                            <br/>
                            <label>
                                Was transportation provided?:
                                <input type="radio" id="ProvidedForensic" name="ProvidedForensic" value="transportation_medical_exam_support" /><label for="ProvidedForensic">yes</label>
                                <input type="radio" id="ProvidedForensic" name="ProvidedForensic" value="transportation_medical_exam_support" /><label for="ProvidedForensic">no</label>
                            </label>
                            <br/>
                            <input type="checkbox" id="medicalAppointment" name="medicalAppointment" value="accompaniment_to_medical_appointment" /><label for="medicalAppointment">Accompaniment to Medical Appointment</label>
                            <br/>
                            <label>
                                Was transportation provided?:
                                <input type="radio" id="ProvidedMedical" name="ProvidedMedical" value="transportation_medical_appointment_medical" /><label for="ProvidedMedical">yes</label>
                                <input type="radio" id="ProvidedMedical" name="ProvidedMedical" value="transportation_medical_appointment_medical" /><label for="ProvidedMedical">no</label>
                            </label>
                            <br/>
                            <input type="checkbox" id="dentalAppointment" name="dentalAppointment" value="medical_appointment_dental" /><label for="dentalAppointment">Accompaniment to Dental Appointment</label>
                            <br/>
                            <label>
                                Was transportation provided?:
                                <input type="radio" id="ProvidedDental" name="ProvidedDental" value="transportation_medical_appointment_dental" /><label for="ProvidedDental">yes</label>
                                <input type="radio" id="ProvidedDental" name="ProvidedDental" value="transportation_medical_appointment_dental" /><label for="ProvidedDental">no</label>
                            </label>
                            <br/>
                        </div>
                        <br/>
                        <div className="advocacyServices">
                            <label>5. Other In-Person Advocacy Services</label>
                                <p>(check any that apply)</p>
                            <input type="checkbox" id="infoReferral" name="infoReferral" value="info_and_referral"/><label for="infoReferral">Information and referral</label>
                            <br/>
                            <input type="checkbox" id="safeHomeRegister" name="safeHomeRegister" value="safe_at_home_registration" /><label for="safeHomeRegister">Safe at Home registration</label>
                            <br/>
                            <input type="checkbox" id="emergencyFinancial" name="emergencyFinancial" value="emergency_financial_assistance" /><label for="emergencyFinancial">Emergency financial assistance</label>
                            <br/>
                            <input type="checkbox" id="reparationsClaims" name="reparationsClaims" value="reparations_claims_assistance" /><label for="reparationsClaims">Reparations Claims Assistance</label>
                        </div>
                        <br/>
                        <div className="usedSinceOctContainer">
                            <label>6. Has the victim/survivor used this type of in-person service since October 1, 2017?</label>
                            <br />
                            <br />
                            <input type="radio" id="usedSinceOct" name="usedSinceOct" value="true" /><label for="usedSinceOct">yes</label>
                            <input type="radio" id="usedSinceOct" name="usedSinceOct" value="false" /><label for="usedSinceOct">no</label>
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
                            <input type="checkbox" id="unmetFinancial" name="unmetFinancial" value="unmet_financial"/><label for="unmetFinancial">Financial</label>
                            <br/>
                            <input type="checkbox" id="unmetShelter" name="unmetShelter" value="unmet_shelter_or_housing" /><label for="unmetShelter">Shelter/Housing</label>
                            <br/>
                            <input type="checkbox" id="otherUnmet" name="otherUnmet" value="other_unmet" /><label for="otherUnmet">Other</label>
                            <br/>
                            <label for="ifOtherUnmet">If shelter was unavailable, where did the v/s stay?</label>
                            <input type="text" id="ifOtherUnmet" name="ifOtherUnmet" />
                        </div>
                </div>
                <div className="referrals">
                    <h2>Referrals</h2>
                    <p>(please fill in name of organization)</p>
                    <label>SVC Services:</label>
                    <input type="text"/>
                    <br/>
                    <label>Other advocacy agency:</label>
                    <input type="text"/>
                    <br/>
                    <label>Other services, support and resources(specify):</label>
                    <input type="text"/>
                    <br/>
                </div>
                <div className="support">
                    <h2>Did They Feel Supported?</h2>
                    <p><strong>MANDATORY</strong> Did you feel that you were supported on this call?</p>
                    <input type="radio" id="feelSupported" name="feelSupported" value="true" /><label for="feelSupported">yes</label>
                    <input type="radio" id="feelSupported" name="feelSupported" value="false" /><label for="feelSupported">no</label>
                </div>
                <div className="demographics">
                    <h2>Victim/Survivor Demographics</h2>
                    <h3>Type of Sexual Violence</h3>
                    <input type="checkbox" id="AdultSexualAssault" value="violence_adult_sexual"/><label for="AdultSexualAssault">Adult Sexual Assault</label>
                    <br/>
                    <input type="checkbox" id="abusedAsChildFamily" value="violence_adult_when_child_by_family"/><label for="abusedAsChildFamily">Adult abused as child - family</label>
                    <br/>
                    <input type="checkbox" id="abusedAsChildOther" value="violence_adult_when_child_by_other"/><label for="abusedAsChildOther">Adult abused as child - other</label>
                    <br/>
                    <input type="checkbox" id="bullying" value="violence_bullying"/><label for="bullying">Bullying (verbal/cyber/physical)</label>
                    <br/>
                    <input type="checkbox" id="childPornography" value="violence_child_pornography"/><label for="childPornography">Child Pornography</label>
                    <br/>
                    <input type="checkbox" id="domesticViolence" value="violence_domestic"/><label for="domesticViolence">Domestic Violence</label>
                    <br/>
                    <input type="checkbox" id="elderAbuse" value="violence_elder"/><label for="elderAbuse">Elder Abuse</label>
                    <br/>
                    <input type="checkbox" id="exposing" value="violence_exposing"/><label for="exposing">Exposing</label>
                    <br/>
                    <input type="checkbox" id="internetRelated" value="violence_internet"/><label for="internetRelated">Internet Related</label>
                    <br/>
                    <input type="checkbox" id="minorFamily" value="violence_minor_by_family"/><label for="minorFamily">Minor/CSA - family</label>
                    <br/>
                    <input type="checkbox" id="minorOther" value="violence_minor_by_other"/><label for="minorOther">Minor/CSA - other</label>
                    <br/>
                    <input type="checkbox" id="obscenePhoneCall" value="violence_phone"/><label for="obscenePhoneCall">Obscene Phone Call</label>
                    <br/>
                    <input type="checkbox" id="exploitationTrafficking" value="violence_exploitation_trafficking"/><label for="exploitationTrafficking">Sexual exploitation/trafficking/prostitution</label>
                    <br/>
                    <input type="checkbox" id="sexualHarrasment" value="violence_harassment"/><label for="sexualHarassment">Sexual Harassment</label>
                    <br/>
                    <input type="checkbox" id="stalking" value="violence_stalking"/><label for="stalking">Stalking</label>
                    <br/>
                    <input type="checkbox" id="teenDating" value="violence_teen_dating"/><label for="teenDating">Teen Dating</label>
                    <br/>
                    <input type="checkbox" id="violenceOther" value="violence_other"/><label for="violenceOther">Other</label>
                    <br/>
                    <label>specify:</label>
                    <input type="text" />
                    <br/>
                    <input type="checkbox" id="violenceUnknown" value="violence_unknown"/><label for="violenceUnknown">Unknown/pass/doesn't know</label>
                    <br/>
                    <h3>Was a police report filed?</h3>
                    <select name="policeReport">
                            <option value="police_report_filed">yes</option>
                            <option value="police_report_filed">no</option>
                            <option value="police_report_filed">unknown</option>
                    </select>
                    <h2>Demographics Survey</h2>
                    <label for="victim_age">Age:</label>
                    <input type="number"/>
                    <label for="victim_gender">Gender:</label>
                    <input type="text"/>
                    <label for="transgender">Transgender:</label>
                    <select name="transgender">
                        <option value="victim_transgender">yes</option>
                        <option value="victim_transgender">no</option>
                        <option value="victim_transgender">unknown/pass</option>
                    </select>
                    <label for="sexualOrientation">Sexual Orientation</label>
                    <input type="text" id="sexualOrientation"/>
                    <label for="genderPronouns">Gender Pronouns</label>
                    <input type="text" id="genderPronouns"/>
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
                </div>
            </div>
        )
    }
}

export default Form;