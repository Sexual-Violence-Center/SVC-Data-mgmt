import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid } from '@material-ui/core';

import AdvocateName from './ContactComponents/AdvocateName';
import CurrentDate from './ContactComponents/CurrentDate';
import StartTime from './ContactComponents/StartTime';
import EndTime from './ContactComponents/EndTime';
import ContactDate from './ContactComponents/ContactDate';
import ServiceLocation from './ContactComponents/ServiceLocation';
import County from './ContactComponents/County';
import ClientNumber from './ContactComponents/ClientNumber';
import ZipCode from './ContactComponents/ZipCode';
import TypeOfVictim from './ContactComponents/TypeOfVictim';
import HearAboutSVC from './ContactComponents/HearAboutSVC';
import PriorContact from './ContactComponents/PriorContact';
import PriorToOctContact from './ContactComponents/PriorToOctContact';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

const mapStateToProps = state => ({
    state
});
const intialState = {
  advocate_name: "",
  date_entered: "",
  start_time: "",
  end_time: "",
  contact_date: "",
  service_location: "",
  service_county: "",
  in_person_client_number: "",
  victim_zipcode: "",
  victim_type: "",
  victim_referral_source: "",
  victim_prior_contact: "",
  victim_contact_prior_oct: ""
};

class ContactInfo extends Component {
    constructor() {
        super();
        this.state = intialState
        
    }

    onClick = () => {
        this.setState({
        advocate_name: "Blake",
        date_entered: "2018-06-05",
        start_time: "13:00",
        end_time: "13:30",
        contact_date: "2018-05-01",
        service_location: "HCMC",
        service_county: "Hennepin",
        victim_zipcode: "55425",
        victim_type: "adultPrimaryVictim",
      })
    }

    static getDerivedStateFromProps(props, state){
        if (!props.state.EntryFormReducer) {
          return intialState;
        }
        const {updateFormReducer} = props.state;
        if (props.dispatchTo === "UPDATE_THE_FORM") {
          return updateFormReducer;
        }
        else {
            return null;
        }
        
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked :
            target.type === ('radio') ? JSON.parse(target.value) :
                target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.dispatch({
            type: this.props.dispatchTo,
            payload: { ...this.state, [name]: value }
        })
    }

    render() {
        return <div className="contactInfo">
            <Card style={{ padding: "20px", margin: "10px" }}>
              <div>
                <h2>Contact Info</h2>
                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={0}
                onClick={this.onClick}
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
                    <ServiceLocation handleChangeFor={this.handleChangeFor} service_location={this.state.service_location} />
                  </Grid>
                  {/* doesn't work */}
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <County handleChangeFor={this.handleChangeFor} service_county={this.state.service_county} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ClientNumber handleChangeFor={this.handleChangeFor} in_person_client_number={this.state.in_person_client_number} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ZipCode handleChangeFor={this.handleChangeFor} victim_zipcode={this.state.victim_zipcode} />
                  </Grid>
                  {/* doesn't work */}
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TypeOfVictim handleChangeFor={this.handleChangeFor} victim_type={this.state.victim_type} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <HearAboutSVC handleChangeFor={this.handleChangeFor} victim_referral_source ={this.state.victim_referral_source}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9} lg={9}>
                    <PriorContact handleChangeFor={this.handleChangeFor} victim_prior_contact={this.state.victim_prior_contact}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9} lg={9}>
                    <PriorToOctContact handleChangeFor={this.handleChangeFor} victim_contact_prior_oct={this.state.victim_contact_prior_oct}/>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </div>;
    }
}

ContactInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ContactInfo));