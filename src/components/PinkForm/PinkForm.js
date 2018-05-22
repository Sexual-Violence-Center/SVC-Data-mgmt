import React, { Component } from 'react';
import { connect } from 'react-redux';
import TelephoneContactInfo from '../FormComponents/ContactInfo/TelephoneContactInfo';
import PhoneServices from '../FormComponents/PhoneServices/PhoneServices';
import Support from '../FormComponents/Support/Support';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';
import Demographics from '../FormComponents/Demographics/Demographics';

const mapStateToProps = state => ({
    state
})

class PinkForm extends Component {
    constructor(){
        super()
        this.state = {
            contact_type: 'telephone'
        }
    }
    handleSubmit = () => {
        console.log(this.props.state.EntryFormReducer);
        this.props.dispatch({
            type: 'ADD_NEW_VICTIM',
            payload: {...this.state, ...this.props.state.EntryFormReducer}
        })
    }

    render() {
        return (
            <div>
                <h1>SVC Telephone Contact Form for Primary AND Secondary Victims</h1>
                <TelephoneContactInfo />
                <PhoneServices />
                <Support />
                <UnmetNeeds />
                <Referrals />
                <Demographics />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PinkForm);