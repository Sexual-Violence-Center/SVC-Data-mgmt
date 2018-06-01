import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, InputLabel, Select, FormControl, Divider, } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Gender extends Component {
    constructor() {
        super();
    }

    handleChange = (event) => {
        this.props.handleChangeFor(event);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="victim_gender">Gender</InputLabel>
                    <Select
                        value={this.props.victim_gender}
                        onChange={this.handleChange}
                        className={classes.textField}
                        inputProps={{
                            name: 'victim_gender',
                            id: 'victim_gender',
                        }}>
                        <MenuItem style={{width: '100%'}} value="Male">Male</MenuItem>
                        <Divider />
                        <MenuItem style={{width: '100%'}} value="Female">Female</MenuItem>
                        <Divider />
                        <MenuItem style={{width: '100%'}} value="Non-Binary">Non-Binary</MenuItem>
                        <Divider />
                        <MenuItem style={{width: '100%'}} value="Other">Other</MenuItem>
                        <Divider />
                        <MenuItem style={{width: '100%'}} value="Not Reported">Not Reported</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
}

Gender.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gender);