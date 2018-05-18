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
                </div>
                <div className="phoneServices">
                    <h2>Telephone Services</h2>
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