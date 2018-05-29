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
import FormButton from '../FormComponents/FormButton/FormButton';

import { Paper, Typography, Card, Button } from '@material-ui/core';

const mapStateToProps = state => ({
    state
})

const style = {
    title: {
        backgroundColor: '#F48FB1',
        textAlign: 'center',
        color: 'black',
        padding: '10px',
    }, 
    paper: {
        backgroundColor: '#F8BBD0',
        padding: '10px'
    }
}

class PinkForm extends Component {
  constructor() {
    super();
    this.state = {
      contact_type: "telephone"
    };
  }
  handleSubmit = () => {
    console.log(this.props.state.EntryFormReducer);
    this.props.dispatch({
      type: "ADD_NEW_VICTIM",
      payload: { ...this.state, ...this.props.state.EntryFormReducer }
    });
  };


  render() {
    let DataEntryNav;
    if (this.props.state.user.userInfo === true) {
      DataEntryNav = <AdminNav />;
    } else if (this.props.state.user.userInfo === false) {
      DataEntryNav = <UserNav />;
    }
    return <div style={{ float: "right", marginRight: "80px" }}>
        {DataEntryNav}
        <Paper style={style.paper}>
          <Card style={{ margin: "10px" }}>
            <Typography variant="display1" style={style.title}>
              Telephone Contact Form for Primary AND Secondary Victims
            </Typography>
          </Card>
          <TelephoneContactInfo dispatchTo={"ENTRY_FORM_DATA"} />
          <PhoneServices dispatchTo={"ENTRY_FORM_DATA"} />
          <Support dispatchTo={"ENTRY_FORM_DATA"} />
          <UnmetNeeds dispatchTo={"ENTRY_FORM_DATA"} />
          <Referrals dispatchTo={"ENTRY_FORM_DATA"} />
          <Demographics dispatchTo={"ENTRY_FORM_DATA"} />
          <FormButton handleSubmit={this.handleSubmit} text={'Submit'}/>
        </Paper>
      </div>;
  }
}

export default connect(mapStateToProps)(PinkForm);