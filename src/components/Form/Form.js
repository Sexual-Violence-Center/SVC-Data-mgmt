import React, { Component } from 'react';

class Form extends Component {
    render(){
        return(
            <div className="entryFormContainer">
                <div className="contactInfo">
                    <h2>Contact Info</h2>
                    <label>
                        Advocate/Counselor Name:
                        <input type="text"/>
                    </label>
                    <label>
                        Date:
                        <input type="date"/>
                    </label>
                    <label>
                        Start Time: 
                        <input type="time"/>
                    </label>
                    <label>
                        End Time: 
                        <input type="time"/>
                    </label>
                    <br/>
                    <label>
                        Location(where services are being provided):
                        <input type="text"/>
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
                        <input type="number"/>
                    </label>
                    <label>
                        Zip Code:
                        <input type="number"/>
                    </label>
                    <br/>
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
                        <input type="text"/>
                    </label>
                    <br/>
                    <div>
                        <label>
                            Have they contacted SVC before?:
                        </label>
                        <input type="radio" id="yesContacted" name="haveContactedBefore" value="yes"/><label for="yesContacted">yes</label>
                        <input type="radio" id="noContacted" name="haveContactedBefore" value="no"/><label for="noContacted">no</label>
                    </div>
                    <label>
                        If yes, was it before Oct 1, 2017?:
                        <input type="radio" id="yesContacted" name="contactedBeforeOct" value="yes"/><label for="yesContacted">yes</label>
                        <input type="radio" id="noContacted" name="contactedBeforeOct" value="no"/><label for="noContacted">no</label>
                    </label>
                </div>
                <div className="phoneServices">
                    <h2>Telephone Services</h2>
                    <div className="telephoneChoices">
                        <p>(check all that apply)</p>
                        <input type="checkbox" id="crisisCounseling" name="crisisCounseling" value="Crisis Counseling"/><label for="crisisCounseling">Crisis Counseling</label>
                        <br/>
                        <input type="checkbox" id="infoReferral" name="infoReferral" value="Info or Referral"/><label for="infoReferral">Info and/or referral(including appointments/intakes for service</label>
                        <br/>
                        <input type="checkbox" id="criminalJusticeInfo" name="criminalJusticeInfo" value="Criminal Justice Info"/><label for="criminalJusticeInfo">Information about the criminal justice process</label>
                        <br/>
                        <input type="checkbox" id="otherEmergency" name="otherEmergency" value="Other Emergency Assistance"/><label for="otherEmergency">Other emergency justice-related assistance</label>
                        <br/>
                        <input type="checkbox" id="emergencyFinancial" name="emergencyFinancial" value="Emergency Financial Assistance"/><label for="emergencyFinancial">Emergency Financial Assistance</label>
                        <br/>
                        <input type="checkbox" id="reparationsClaims" name="reparationsClaims" value="Reparations Claims Assistance"/><label for="reparationsClaims">Reparations Claims Assistance</label>
                    </div>
                </div>
                <div className="in-personServices">
                    <h2>In-Person Services</h2>
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