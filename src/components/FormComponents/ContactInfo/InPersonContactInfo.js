import React, { Component } from 'react';

class ContactInfo extends Component{
    render(){
        return(
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
        )
    }
}

export default ContactInfo;