import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import TelephoneContactInfo from '../FormComponents/ContactInfo/TelephoneContactInfo';
import PhoneServices from '../FormComponents/PhoneServices/PhoneServices';
import Support from '../FormComponents/Support/Support';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';
import Demographics from '../FormComponents/Demographics/Demographics';
import UserNav from '../Nav/UserNav/UserNav';
import AdminNav from '../Nav/AdminNav/AdminNav';
import FormButton from '../FormComponents/FormButton/FormButton';

import { Paper, Typography, Card, Grid } from '@material-ui/core';

const mapStateToProps = state => ({
  user: state.user,
  state
})

const style = {
  title: {
    backgroundColor: '#F8BBD0',
    textAlign: 'center',
    color: '#424242',
    padding: '10px',
  },
  paper: {
    backgroundColor: '#FCE4EC',
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

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  render() {
    let DataEntryNav;
    if (this.props.state.user.userInfo === true) {
      DataEntryNav = <AdminNav />;
    } else if (this.props.state.user.userInfo === false) {
      DataEntryNav = <UserNav />;
    }
    return (
      <div>
        <div style={{ float: "right", marginRight: "40px" }}>
          {DataEntryNav}
          <Grid container spacing={40}>
            <Grid item xs={6} sm={6} md={3} lg={3}>
            </Grid>
            <Grid item xs={6} sm={6} md={9} lg={9} xl={12}>
              <Paper style={style.paper}>
                <Card style={{ margin: "10px" }}>
                  <Typography variant="display1" style={style.title}>
                    Telephone Contact Form for Primary AND Secondary Victims
                </Typography>
                </Card>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TelephoneContactInfo dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <PhoneServices dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Support dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <UnmetNeeds dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Referrals dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Demographics dispatchTo={"ENTRY_FORM_DATA"} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormButton handleSubmit={this.handleSubmit} text={'Submit'} />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PinkForm);