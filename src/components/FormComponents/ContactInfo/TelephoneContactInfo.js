import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';

import AdvocateName from './ContactComponents/AdvocateName';
import CurrentDate from './ContactComponents/CurrentDate';
import StartTime from './ContactComponents/StartTime';
import EndTime from './ContactComponents/EndTime';
import ContactDate from './ContactComponents/ContactDate';
import ZipCode from './ContactComponents/ZipCode';
import TypeOfVictim from './ContactComponents/TypeOfVictim';
import HearAboutSVC from './ContactComponents/HearAboutSVC';
import PriorContact from './ContactComponents/PriorContact';
import PriorToOctContact from './ContactComponents/PriorToOctContact';

const mapStateToProps = state => ({
    state
});

const style = {
    padding: '20px',
    margin: '10px'
}

class TelephoneContactInfo extends Component {
    constructor() {
        super();
        this.state = {
            advocate_name: '',
            date_entered: undefined,
            start_time: undefined,
            end_time: undefined,
            contact_date: undefined,
            victim_zipcode: undefined,
            victim_type: '',
            victim_referral_source: '',
            victim_prior_contact: undefined,
            victim_contact_prior_oct: undefined,
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :
                      target.type === 'radio' ? target.checked :
                      target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.dispatch({
            type: this.props.dispatchTo,
            payload: { ...this.state, [name]: value }
        })
    }
    render() {
        return (
            <div className="contactInfo">
                <Card style={style}>
                    <h2>Contact Info</h2>
                    <AdvocateName handleChangeFor={this.handleChangeFor} />
                    <CurrentDate handleChangeFor={this.handleChangeFor} />
                    <StartTime handleChangeFor={this.handleChangeFor} />
                    <EndTime handleChangeFor={this.handleChangeFor} />
                    <ContactDate handleChangeFor={this.handleChangeFor} />
                    <ZipCode handleChangeFor={this.handleChangeFor} />
                    <TypeOfVictim handleChangeFor={this.handleChangeFor} />
                    <HearAboutSVC handleChangeFor={this.handleChangeFor} />
                    <PriorContact handleChangeFor={this.handleChangeFor} />
                    <PriorToOctContact handleChangeFor={this.handleChangeFor} />
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TelephoneContactInfo);