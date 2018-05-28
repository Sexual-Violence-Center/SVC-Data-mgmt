import React, { Component } from 'react';
import { connect } from 'react-redux';
import TelephoneContactInfo from '../FormComponents/ContactInfo/TelephoneContactInfo';
import PhoneServices from '../FormComponents/PhoneServices/PhoneServices';
import Support from '../FormComponents/Support/Support';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';
import Demographics from '../FormComponents/Demographics/Demographics';
import UserNav from '../Nav/UserNav/UserNav';
import AdminNav from '../Nav/AdminNav/AdminNav';
import SubmitButton from '../FormComponents/SubmitButton/SubmitButton';

import { Paper, Typography, Card, Button } from '@material-ui/core';

const mapStateToProps = state => ({
    state
})

const style = {
    title: {
        backgroundColor: '#ffb8d8',
        textAlign: 'center',
        color: 'black',
        padding: '10px',
    }, 
    paper: {
        backgroundColor: '#ffe6f2'
    }
}

class PinkForm extends Component {
    constructor() {
        super()
        this.state = {
            contact_type: 'telephone'
        }
    }
    handleSubmit = () => {
        console.log(this.props.state.EntryFormReducer);
        this.props.dispatch({
            type: 'ADD_NEW_VICTIM',
            payload: { ...this.state, ...this.props.state.EntryFormReducer }
        })
    }

    render() {
        let DataEntryNav;
        if (this.props.state.user.userInfo === true) {
            DataEntryNav = <AdminNav />
        } else if (this.props.state.user.userInfo === false) {
            DataEntryNav = <UserNav />
        }
        return (
            <div style={{ float: "right", marginRight: '80px' }}>
                {DataEntryNav}
                <Paper style={style.paper}>
                    <Card style={{margin: '10px'}}>
                        <Typography variant="display1" style={style.title}>
                            Telephone Contact Form for Primary AND Secondary Victims
                        </Typography>
                    </Card>
                    <TelephoneContactInfo />
                    <PhoneServices />
                    <Support />
                    <UnmetNeeds />
                    <Referrals />
                    <Demographics />
                    <SubmitButton handleSubmit={this.handleSubmit}/>
                </Paper>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PinkForm);