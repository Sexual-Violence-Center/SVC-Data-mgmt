import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';

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

const styles = theme => ({
  card: {
    padding: '20px',
    margin: '10px'
  },
  importantText: {
    color: '#F44336',
    marginLeft: '20px'
  }
})

const initialState = {
  advocate_name: "",
  date_entered: "",
  start_time: "",
  end_time: "",
  contact_date: "",
  victim_zipcode: "",
  victim_type: "",
  victim_referral_source: "",
  victim_prior_contact: "",
  victim_contact_prior_oct: ""
};

class TelephoneContactInfo extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  static getDerivedStateFromProps = (props, state) => {
    //if on update the form sets state to the update form reducer
    //changes any null values to undefined
    if (props.dispatchTo === "UPDATE_THE_FORM") {
      const { updateFormReducer } = props.state;
      Object.keys(updateFormReducer).forEach(key => {
        if (updateFormReducer[key] === null) {
          updateFormReducer[key] = undefined;
        }
        return null;
      });
      return updateFormReducer;
    } //If nothing in entryform reducer resets state
    else if (!props.state.EntryFormReducer) {
      return initialState;
    } else {
      return state;
    }
  };

  handleChangeFor = event => {
    const target = event.target;
    const value =
      target.type === "checkbox"
        ? target.checked
        : target.type === "radio"
          ? target.checked
          : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.props.dispatch({
      type: this.props.dispatchTo,
      payload: { ...this.state, [name]: value }
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="contactInfo">
        <Card className={classes.card}>
          <div>
            <h2>Contact Info</h2>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <AdvocateName handleChangeFor={this.handleChangeFor} advocate_name={this.state.advocate_name} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <CurrentDate handleChangeFor={this.handleChangeFor} date_entered={this.state.date_entered} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <StartTime handleChangeFor={this.handleChangeFor} start_time={this.state.start_time} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <EndTime handleChangeFor={this.handleChangeFor} end_time={this.state.end_time} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <ContactDate handleChangeFor={this.handleChangeFor} contact_date={this.state.contact_date} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <ZipCode handleChangeFor={this.handleChangeFor} victim_zipcode={this.state.victim_zipcode} />
                <Typography variant="body2" className={classes.importantText}>
                  * Mandatory field
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TypeOfVictim handleChangeFor={this.handleChangeFor} victim_type={this.state.victim_type} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <HearAboutSVC handleChangeFor={this.handleChangeFor} victim_referral_source={this.state.victim_referral_source} />
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9}>
                <PriorContact handleChangeFor={this.handleChangeFor} victim_prior_contact={this.state.victim_prior_contact} />
                <Typography variant="body2" className={classes.importantText}>
                  * Mandatory field
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9}>
                <PriorToOctContact handleChangeFor={this.handleChangeFor} victim_contact_prior_oct={this.state.victim_contact_prior_oct} />
                <Typography variant="body2" className={classes.importantText}>
                  * Mandatory field
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    );
  }
}

TelephoneContactInfo.PropTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(TelephoneContactInfo));