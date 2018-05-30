import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { TextField, MenuItem, InputLabel, Select, FormControl, Divider, Typography } from '@material-ui/core';

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
        const { classes } = this.props;

        return (
            <div className="contactInfo">
                <Card style={{ padding: '20px', margin: '10px' }}>
                    <div>
                        <h2>Contact Info</h2>
                        <form>
                            <TextField
                                name="advocate_name"
                                label="Advocate/Counselor Name"
                                className={classes.textField}
                                type="text"
                                margin="normal"
                                value={this.state.advocate_name}
                                onChange={this.handleChangeFor}
                            />
                            <TextField
                                name="date_entered"
                                label="Date"
                                className={classes.textField}
                                type="date"
                                margin="normal"
                                value={this.state.date_entered}
                                onChange={this.handleChangeFor}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                name="start_time"
                                label="Start Time"
                                className={classes.textField}
                                type="time"
                                value={this.state.start_time}
                                onChange={this.handleChangeFor}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                name="end_time"
                                label="End Time"
                                className={classes.textField}
                                type="time"
                                value={this.state.end_time}
                                onChange={this.handleChangeFor}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <br />
                            <TextField
                                name="contact_date"
                                label="Contact Date"
                                className={classes.textField}
                                type="date"
                                margin="normal"
                                value={this.state.contact_date}
                                onChange={this.handleChangeFor}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                name="service_location"
                                label="Location(where services are being provided)"
                                // className={classes.textField}
                                type="text"
                                margin="normal"
                                style={{ width: 600 }}
                                value={this.state.service_location}
                                onChange={this.handleChangeFor}
                            />
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="service_county">County</InputLabel>
                                <Select
                                    value={this.state.service_county}
                                    onChange={this.handleChangeFor}
                                    inputProps={{
                                        name: 'service_county',
                                        id: 'service_county',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Select One</em>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem value="Hennepin">Hennepin</MenuItem>
                                    <Divider />
                                    <MenuItem value="Scott">Scott</MenuItem>
                                    <Divider />
                                    <MenuItem value="Carver">Carver</MenuItem>
                                    <Divider />
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                name="in_person_client_number"
                                label="Client Number"
                                className={classes.textField}
                                type="text"
                                margin="normal"
                                value={this.state.in_person_client_number}
                                onChange={this.handleChangeFor}
                            />
                            <TextField
                                name="victim_zipcode"
                                label="Zip Code"
                                className={classes.textField}
                                type="number"
                                margin="normal"
                                value={this.state.victim_zipcode}
                                onChange={this.handleChangeFor}
                            />
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="victim_type">Type of Victim/Survivor</InputLabel>
                                <Select
                                    value={this.state.victim_type}
                                    onChange={this.handleChangeFor}
                                    className={classes.textField}
                                    inputProps={{
                                        name: 'victim_type',
                                        id: 'victim_type',
                                    }}>
                                    <MenuItem value="">
                                        <em>Select One</em>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem value="adult primary">Adult Primary Victim</MenuItem>
                                    <Divider />
                                    <MenuItem value="youth primary">Youth Primary Victim</MenuItem>
                                    <Divider />
                                    <MenuItem value="adult secondary">Adult Secondary Victim</MenuItem>
                                    <Divider />
                                    <MenuItem value="youth secondary">Youth Secondary Victim</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                name="victim_referral_source"
                                label="How did they hear about SVC?"
                                style={{ width: 300 }}
                                type="text"
                                margin="normal"
                                value={this.state.victim_referral_source}
                                onChange={this.handleChangeFor}
                            />
                        </form>
                        <br />
                        <Typography variant="subheading" >
                            Have they contacted SVC before?:
                            <form value={this.state.victim_prior_contact} onClick={this.handleChangeFor}>
                                <input type="radio" name="victim_prior_contact" value={true} />
                                <label htmlFor="victim_prior_contact_yes">yes</label>
                                <input type="radio" name="victim_prior_contact" value={false} />
                                <label htmlFor="victim_prior_contact_no">no</label>
                            </form>
                        </Typography>
                        <Typography variant="subheading" >
                            If yes, was it before Oct 1, 2017?:
                        <form value={this.state.victim_contact_prior_oct} onChange={this.handleChangeFor}>
                            <input type="radio" name="victim_contact_prior_oct" value={true} /><label htmlFor="victim_contact_prior_oct_yes">yes</label>
                            <input type="radio" name="victim_contact_prior_oct" value={false} /><label htmlFor="victim_contact_prior_oct_no">no</label>
                        </form>
                        </Typography>
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
