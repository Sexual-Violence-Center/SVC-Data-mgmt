import React, { Component } from 'react';
import InPersonContactInfo from '../FormComponents/ContactInfo/InPersonContactInfo';
import InpersonServices from '../FormComponents/InPersonServices/InPersonServices';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';
import Demographics from '../FormComponents/Demographics/Demographics';


class YellowForm extends Component {
    render() {
        return (
            <div>
                <h1>SVC In-Person Counseling Form for Primary AND Secondary Victims</h1>
                <InPersonContactInfo />
                <InpersonServices />
                <UnmetNeeds />
                <Referrals />
                <Demographics />
            </div>
        )
    }
}

export default YellowForm;