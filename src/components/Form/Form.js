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
                        <select name="county">
                            <option value="Adult Primary Victim">Adult Primary Victim</option>
                            <option value="Youth Primary Victim">Youth Primary Victim</option>
                            <option value="Adult Secondary Victim">Adult Secondary Victim</option>
                            <option value="Youth Secondary Victim">Youth Secondary Victim</option>
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
                        <input type="radio" id="yesContacted" name="haveContactedBefore" value="true" /><label for="yesContacted">yes</label>
                        <input type="radio" id="noContacted" name="haveContactedBefore" value="false" /><label for="noContacted">no</label>
                    </div>
                    <label>
                        If yes, was it before Oct 1, 2017?:
                        <input type="radio" id="yesContacted" name="contactedBeforeOct" value="true" /><label for="yesContacted">yes</label>
                        <input type="radio" id="noContacted" name="contactedBeforeOct" value="false" /><label for="noContacted">no</label>
                    </label>
                </div>
                <div className="phoneServices">
                    <h2>Telephone Services</h2>
                    <div className="telephoneChoices">
                        <p>(check all that apply)</p>
                        <input type="checkbox" id="crisisCounseling" name="crisisCounseling" value="crisis_counseling" /><label for="crisisCounseling">Crisis Counseling</label>
                        <br />
                        <input type="checkbox" id="infoReferral" name="infoReferral" value="info_or_referral" /><label for="infoReferral">Info and/or referral(including appointments/intakes for service</label>
                        <br />
                        <input type="checkbox" id="criminalJusticeInfo" name="criminalJusticeInfo" value="criminal_justice_info" /><label for="criminalJusticeInfo">Information about the criminal justice process</label>
                        <br />
                        <input type="checkbox" id="otherEmergency" name="otherEmergency" value="other_emergency_assistance" /><label for="otherEmergency">Other emergency justice-related assistance</label>
                        <br />
                        <input type="checkbox" id="emergencyFinancial" name="emergencyFinancial" value="emergency_financial_assistance" /><label for="emergencyFinancial">Emergency Financial Assistance</label>
                        <br />
                        <input type="checkbox" id="reparationsClaims" name="reparationsClaims" value="reparations_claims_assistance" /><label for="reparationsClaims">Reparations Claims Assistance</label>
                    </div>
                </div>
                <div className="in-personServicesContainer">
                    <h2>In-Person Services</h2>
                    <div className="inpersonServices">
                        <div className="crisisCounseling">
                            <label>1. Crisis Counseling</label>
                            <br />
                            <br />
                            <input type="checkbox" id="oneToOne" name="oneToOne" value="one-to-one_counseling" /><label for="oneToOne">One-to-One Counseling</label>
                            <input type="checkbox" id="supportGroup" name="supportGroup" value="support_group" /><label for="supportGroup">Support Group</label>
                        </div>
                        <br />
                        <div className="justiceProcess">
                            <label>2. Legal Advocacy: Criminal Justice Process</label>
                            <br />
                            <br />
                            <input type="checkbox" id="lawEnforcementInterview" name="lawEnforcementInterview" value="law_enforcement_interview" /><label for="lawEnforcementInterview">Law Enforcement Interview</label>
                            <input type="checkbox" id="prosecutionAdvocacy" name="prosecutionAdvocacy" value="prosecution-related_advocacy" /><label for="prosecutionAdvocacy">Prosecution-related Advocacy</label>
                            <input type="checkbox" id="courtAdvocacy" name="courtAdvocacy" value="court_advocacy" /><label for="courtAdvocacy">Court Advocacy(criminal case)</label>
                        </div>
                        <br />
                        <div className="civilLegalProcess">
                            <label>3. Legal Advocacy: Civil Legal Process</label>
                            <br />
                            <br />
                            <input type="checkbox" id="obtainOorH" name="obtainOorH" value="assistance_obtaining_ofp_or_hro" /><label for="obtainOorH">Assistance Obtaining OFP or HRO</label>
                            <input type="checkbox" id="immigrantSupport" name="immigrantSupport" value="immigration_support" /><label for="immigrantSupport">Immigration-related support(U Visa, etc.)</label>
                            <input type="checkbox" id="intervention" name="intervention" value="intervention" /><label for="intervention">Intervention with landlord, academic institution, or creditor</label>
                        </div>
                        <br />
                        <div className="medicalAdvocacy">
                            <label>4. Medical Advocacy</label>
                            <br />
                            <br />
                            <input type="checkbox" id="forensicExam" name="forensicExam" value="forensic_exam_support" /><label for="forensicExam">Forensic Exam Support</label>
                            <br/>
                            <label>
                                Was transportation provided?:
                                <input type="radio" id="ProvidedForensic" name="ProvidedForensic" value="true" /><label for="ProvidedForensic">yes</label>
                                <input type="radio" id="ProvidedForensic" name="ProvidedForensic" value="false" /><label for="ProvidedForensic">no</label>
                            </label>
                            <br/>
                            <input type="checkbox" id="medicalAppointment" name="medicalAppointment" value="accompaniment_to_medical_appointment" /><label for="medicalAppointment">Accompaniment to Medical Appointment</label>
                            <br/>
                            <label>
                                Was transportation provided?:
                                <input type="radio" id="ProvidedMedical" name="ProvidedMedical" value="true" /><label for="ProvidedMedical">yes</label>
                                <input type="radio" id="ProvidedMedical" name="ProvidedMedical" value="false" /><label for="ProvidedMedical">no</label>
                            </label>
                            <br/>
                            <input type="checkbox" id="dentalAppointment" name="dentalAppointment" value="accompaniment_to_dental_appointment" /><label for="dentalAppointment">Accompaniment to Dental Appointment</label>
                            <br/>
                            <label>
                                Was transportation provided?:
                                <input type="radio" id="ProvidedDental" name="ProvidedDental" value="true" /><label for="ProvidedDental">yes</label>
                                <input type="radio" id="ProvidedDental" name="ProvidedDental" value="false" /><label for="ProvidedDental">no</label>
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
                        <div className="unmetNeedsContainer">
                            <label>7. Were there any unmet needs for this individual?</label>
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
                </div>
                <div className="unmetNeeds">
                    <h2>Unmet Needs</h2>
                </div>
                <div className="referrals">
                    <h2>Referrals</h2>
                </div>
                <div className="support">
                    <h2>Did They Feel Supported?</h2>
                </div>
                <div className="demographics">
                    <h2>Demographics</h2>
                </div>
            </div>
        )
    }
}

export default Form;