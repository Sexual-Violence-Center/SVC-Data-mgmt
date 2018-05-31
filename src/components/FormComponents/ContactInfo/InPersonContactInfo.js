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

class ContactInfo extends Component {
    constructor() {
        super();
        this.state = {
            advocate_name: '',
            date_entered: undefined,
            start_time: undefined,
            end_time: undefined,
            contact_date: undefined,
            service_location: '',
            service_county: '',
            in_person_client_number: undefined,
            victim_zipcode: undefined,
            victim_type: '',
            victim_referral_source: '',
            victim_prior_contact: undefined,
            victim_contact_prior_oct: undefined,
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
        return (
            <div className="contactInfo">
                <Card style={{ padding: '20px', margin: '10px' }}>
                    <div>
                        <h2>Contact Info</h2>
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={0}>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <AdvocateName handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <CurrentDate handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <StartTime handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <EndTime handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <ContactDate handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <ServiceLocation handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <County handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <ClientNumber handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <ZipCode handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <TypeOfVictim handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <HearAboutSVC handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} lg={3}>
                                <PriorContact handleChangeFor={this.handleChangeFor} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} lg={3}>
                                <PriorToOctContact handleChangeFor={this.handleChangeFor} />
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </div>
        )
    }
}

ContactInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ContactInfo));