import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, InputLabel, Select, FormControl, Divider, TextField } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class ServiceLocation extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            other: ''
        }
    }


    handleChange = (event) => {
        this.setState({ name: event.target.value });
        this.props.handleChangeFor(event);
    }

    handleChangeOther = (event) => {
        this.setState({ other: event.target.value });
        this.props.handleChangeFor(event);
    }

    render() {
        const { classes } = this.props;
        
        let other; 
        if(this.state.name === 'Other'){

            other = <TextField
            name="service_location"
            label="Specify Other Location"
            className={classes.textField}
            type="text"
            margin="normal"
            value={this.props.service_location}
            onChange={this.handleChangeOther}
        />
        }

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="service_location">Location of Service</InputLabel>
                    <Select
                        value={this.state.name}
                        onChange={this.handleChange}
                        className={classes.textField}
                        inputProps={{
                            name: 'service_location',
                            id: 'service_location',
                        }}>
                        <MenuItem style={{ width: '100%' }} value="212 Medical Center">212 Medical Center</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Abbott Northwestern Hospital">Abbott Northwestern Hospital</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Belle Plaine High School">Belle Plaine High School</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Fairview Southdale Hospital">Fairview Southdale Hospital</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Hennepin County Jail">Hennepin County Jail</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="HCMC">HCMC</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="House of Charity">House of Charity</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Maple Grove Hospital">Maple Grove Hospital</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Methodist Hospital">Methodist Hospital</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="New Prague High School">New Prague High School</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="North Memorial Hospital">North Memorial Hospital</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="PEASE">PEASE</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Plymouth">Plymouth</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Richfield Health Services">Richfield Health Services</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Scott County Jail">Scott County Jail</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Sexual Violence Center">Sexual Violence Center</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Shakopee">Shakopee</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Shakopee Correctional Facility">Shakopee Correctional Facility</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="St. Francis Hospital">St. Francis Hospital</MenuItem>
                        <Divider />
                        <MenuItem style={{ width: '100%' }} value="Other">Other</MenuItem>
                    </Select>
                </FormControl>
                {other}
            </div>
        )
    }
}

ServiceLocation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceLocation);