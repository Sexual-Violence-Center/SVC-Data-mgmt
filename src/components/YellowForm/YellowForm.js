import React, { Component } from 'react';
import { connect } from 'react-redux';
import InPersonContactInfo from '../FormComponents/ContactInfo/InPersonContactInfo';
import InpersonServices from '../FormComponents/InPersonServices/InPersonServices';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';
import Demographics from '../FormComponents/Demographics/Demographics';
import UserNav from '../Nav/UserNav/UserNav';
import AdminNav from '../Nav/AdminNav/AdminNav';

import { Paper, Typography, Card, Button } from '@material-ui/core';

const mapStateToProps = state => ({
    state
})

const style = {
    title: {
        backgroundColor: '#fbff97',
        textAlign: 'center',
        color: 'black'
    }, 
    // submitButton: {
    //     padding: '0 30px'
    // }
}

class YellowForm extends Component {
    constructor() {
        super()
        this.state = {
            contact_type: 'in-person'
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
            <div style={{ float: "right" }}>
                {DataEntryNav}
                <Paper>
                    <Card>
                        <Typography variant="display1" color="secondary" style={style.title}>
                            In-Person Contact Form for Primary AND Secondary Victims
                    </Typography>
                    </Card>
                    <InPersonContactInfo />
                    <InpersonServices />
                    <UnmetNeeds />
                    <Referrals />
                    <Demographics />
                    <Card style={{ padding: '20px', margin: '10px', textAlign: 'center' }}>
                        <Button onClick={this.handleSubmit}>
                            <Typography variant="headline">
                                Submit
                            </Typography>
                        </Button>
                    </Card>
                </Paper>
            </div>
        )
    }
}

export default connect(mapStateToProps)(YellowForm);