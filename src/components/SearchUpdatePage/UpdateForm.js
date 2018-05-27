import React, { Component } from "react";
import PhoneServices from '../FormComponents/PhoneServices/PhoneServices';
import Support from '../FormComponents/Support/Support';
import Demographics from '../FormComponents/Demographics/Demographics';
import InPersonContactInfo from '../FormComponents/ContactInfo/InPersonContactInfo';
import InpersonServices from '../FormComponents/InPersonServices/InPersonServices';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';


const UpdateForm = ()=>{
    return(<div>
        this is a test
        <InPersonContactInfo />
        <InpersonServices />
        <PhoneServices />
        <Support />
        <UnmetNeeds />
        <Referrals />
        <Demographics />
        </div>
    );
}

export default UpdateForm;