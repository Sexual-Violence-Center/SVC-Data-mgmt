import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Card } from '@material-ui/core';

const mapStateToProps = state => ({
    state
});

class ContactInfo extends Component {
    constructor() {
        super();
        this.state = {
            advocate_name: '',
            date_entered: undefined,
            start_time: undefined,
            end_time: undefined,
            contact_date: undefined,
            service_location: '',
            service_county: '',
            in_person_client_number: undefined,
            victim_zipcode: undefined,
            victim_type: '',
            victim_referral_source: '',
            victim_prior_contact: undefined,
            victim_contact_prior_oct: undefined,
        }
    }
    handleChangeFor = (event) => {
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
            <div className="contactInfo">
                <Card style={{ padding: '20px', margin: '10px' }}>
                    <h2>Contact Info</h2>
                    <form>
                        <label>
                            Advocate/Counselor Name:
                <input type="text" name="advocate_name" value={this.state.advocate_name} onChange={this.handleChangeFor} />
                        </label>
                        <label>
                            Date:
                <input type="date" name="date_entered" value={this.state.date_entered} onChange={this.handleChangeFor} />
                        </label>
                        <br />
                        <label>
                            Start Time:
                <input type="time" name="start_time" value={this.state.start_time} onChange={this.handleChangeFor} />
                        </label>
                        <label>
                            End Time:
                <input type="time" name="end_time" value={this.state.end_time} onChange={this.handleChangeFor} />
                        </label>
                        <br />
                        <label>
                            Contact Date:
                <input type="date" name="contact_date" value={this.state.contact_date} onChange={this.handleChangeFor} />
                        </label>
                        <label>
                            Location(where services are being provided):
                <input type="text" name="service_location" value={this.state.service_location} onChange={this.handleChangeFor} />
                        </label>
                    </form>
                    <label>
                        County:
                    </label>
                    <select name="service_county" value={this.state.service_county} onChange={this.handleChangeFor}>
                        <option>Select One</option>
                        <option value="Hennepin">Hennepin</option>
                        <option value="Scott">Scott</option>
                        <option value="Carver">Carver</option>
                        <option value="Other">Other</option>
                    </select>
                    <form>
                        <label>
                            Client Number:
                        </label>
                        <input type="text" name="in_person_client_number" value={this.state.in_person_client_number} onChange={this.handleChangeFor} />
                        <label>
                            Zip Code:
                        </label>
                        <input type="number" name="victim_zipcode" value={this.state.victim_zipcode} onChange={this.handleChangeFor} />
                    </form>
                    <br />
                    <label>
                        Type of Victim/Survivor:
                    </label>
                    <select name="victim_type" value={this.state.victim_type} onChange={this.handleChangeFor}>
                        <option>Select One</option>
                        <option value="adult primary">Adult Primary Victim</option>
                        <option value="youth primary">Youth Primary Victim</option>
                        <option value="adult secondary">Adult Secondary Victim</option>
                        <option value="youth secondary">Youth Secondary Victim</option>
                    </select>
                    <form>
                        <label>
                            How did they hear about SVC?:
                        </label>
                        <input type="text" name="victim_referral_source" value={this.state.victim_referral_source} onChange={this.handleChangeFor} />
                    </form>
                    <br />
                    <div>
                        <label>
                            Have they contacted SVC before?:
                        </label>
                        <form value={this.state.victim_prior_contact} onClick={this.handleChangeFor}>
                            <input type="radio" id="victim_prior_contact_yes" name="victim_prior_contact" value={true} /><label htmlFor="victim_prior_contact_yes">yes</label>
                            <input type="radio" id="victim_prior_contact_no" name="victim_prior_contact" value={false} /><label htmlFor="victim_prior_contact_no">no</label>
                        </form>
                    </div>
                    <label>
                        If yes, was it before Oct 1, 2017?:
                    </label>
                    <form value={this.state.victim_contact_prior_oct} onChange={this.handleChangeFor}>
                        <input type="radio" id="victim_contact_prior_oct_yes" name="victim_contact_prior_oct" value={true} /><label htmlFor="victim_contact_prior_oct_yes">yes</label>
                        <input type="radio" id="victim_contact_prior_oct_no" name="victim_contact_prior_oct" value={false} /><label htmlFor="victim_contact_prior_oct_no">no</label>
                    </form>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ContactInfo);
