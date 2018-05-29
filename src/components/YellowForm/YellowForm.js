import React, { Component } from 'react';
import { connect } from 'react-redux';
import InPersonContactInfo from '../FormComponents/ContactInfo/InPersonContactInfo';
import InPersonServices from '../FormComponents/InPersonServices/InPersonServices';
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
        backgroundColor: '#FFEE58',
        textAlign: 'center',
        color: 'black', 
        padding: '10px',
    },
    paper:{
        backgroundColor: '#FFF59D', 
        padding: '10px'
    }
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
        return <div style={{ float: "right", marginRight: "80px" }}>
            {DataEntryNav}
            <Paper style={style.paper}>
              <Card style={{ margin: "10px" }}>
                <Typography variant="display1" style={style.title}>
                  In-Person Contact Form for Primary AND Secondary Victims
                </Typography>
              </Card>
              <InPersonContactInfo dispatchTo={"ENTRY_FORM_DATA"} />
              <InPersonServices dispatchTo={"ENTRY_FORM_DATA"} />
              <UnmetNeeds dispatchTo={"ENTRY_FORM_DATA"} />
              <Referrals dispatchTo={"ENTRY_FORM_DATA"} />
              <Demographics dispatchTo={"ENTRY_FORM_DATA"} />
              <SubmitButton handleSubmit={this.handleSubmit} />
            </Paper>
          </div>;
    }
}

export default connect(mapStateToProps)(YellowForm);