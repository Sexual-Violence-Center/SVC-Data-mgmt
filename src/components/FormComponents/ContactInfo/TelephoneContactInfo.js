import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class TelephoneContactInfo extends Component{
    constructor(){
        super();
        this.state = {
            advocate_name: '',
            date_entered: '',
            start_time: '',
            end_time: '',
            contact_date: '',
            victim_zipcode: '',
            victim_type: '',
            victim_referral_source: '',
            victim_prior_contact: null,
            victim_contact_prior_oct: null,
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        this.props.dispatch({
            type: 'ENTRY_FORM_DATA', 
            payload: {...this.state, [name]: value }
        })
    }
    render(){
        return(
            <div className="contactInfo">
            <h2>Contact Info</h2>
            <label>
                Advocate/Counselor Name:
                <input type="text" name="advocate_name" value={this.state.advocate_name} onChange={this.handleChangeFor}/>
            </label>
            <label>
                Date:
                <input type="date" name="date_entered" value={this.state.date_entered} onChange={this.handleChangeFor}/>
            </label>
            <label>
                Start Time:
                <input type="time" name="start_time" value={this.state.start_time} onChange={this.handleChangeFor}/>
            </label>
            <label>
                End Time:
                <input type="time" name="end_time" value={this.state.end_time} onChange={this.handleChangeFor}/>
            </label>
            <br />
            <label>
                Contact Date:
                <input type="date" name="contact_date" value={this.state.contact_date} onChange={this.handleChangeFor}/>
            </label>
            <label>
                Zip Code:
                <input type="number" name="victim_zipcode" value={this.state.victim_zipcode} onChange={this.handleChangeFor}/>
            </label>
            <br />
            <label>
                Type of Victim/Survivor:
                <select name="victim_type" value={this.state.victim_type} onChange={this.handleChangeFor}>
                    <option>Select One</option>
                    <option value="adult primary">Adult Primary Victim</option>
                    <option value="youth primary">Youth Primary Victim</option>
                    <option value="adult secondary">Adult Secondary Victim</option>
                    <option value="youth secondary">Youth Secondary Victim</option>
                </select>
            </label>
            <label>
                How did they hear about SVC?:
                <input type="text" name="victim_referral_source" value={this.state.victim_referral_source} onChange={this.handleChangeFor}/>
            </label>
            <br />
            <div>
                <label>
                    Have they contacted SVC before?:
                </label>
                <form value={this.state.victim_prior_contact} onChange={this.handleChangeFor}>
                    <input type="radio" name="victim_prior_contact" value={true} /><label htmlFor="victim_prior_contact">yes</label>
                    <input type="radio" name="victim_prior_contact" value={false} /><label htmlFor="victim_prior_contact">no</label>
                </form>
            </div>
            <label>
                If yes, was it before Oct 1, 2017?:
            </label>
            <form value={this.state.victim_contact_prior_oct} onChange={this.handleChangeFor}>
                <input type="radio" name="victim_contact_prior_oct" value={true} /><label htmlFor="victim_contact_prior_oct">yes</label>
                <input type="radio" name="victim_contact_prior_oct" value={false} /><label htmlFor="victim_contact_prior_oct">no</label>
            </form>
        </div>
        )
    }
}

export default connect(mapStateToProps)(TelephoneContactInfo);