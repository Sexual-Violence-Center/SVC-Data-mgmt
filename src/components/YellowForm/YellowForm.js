import React, { Component } from 'react';
import { connect } from 'react-redux';
import InPersonContactInfo from '../FormComponents/ContactInfo/InPersonContactInfo';
import InpersonServices from '../FormComponents/InPersonServices/InPersonServices';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';
import Demographics from '../FormComponents/Demographics/Demographics';
import DataEntryNav from '../Nav/DataEntryNav/DataEntryNav';

const mapStateToProps = state => ({
    state
})

class YellowForm extends Component {
    constructor(){
        super()
        this.state = {
            contact_type: 'in-person'
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
                <DataEntryNav />
                <h1>SVC In-Person Counseling Form for Primary AND Secondary Victims</h1>
                <InPersonContactInfo />
                <InpersonServices />
                <UnmetNeeds />
                <Referrals />
                <Demographics />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(YellowForm);