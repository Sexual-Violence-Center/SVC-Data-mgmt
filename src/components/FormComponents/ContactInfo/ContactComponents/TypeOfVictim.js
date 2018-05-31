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
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class TypeOfVictim extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }


    handleChange = (event) => {
        this.setState({ name: event.target.value });
        this.props.handleChangeFor(event);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="victim_type">Type of Victim/Survivor</InputLabel>
                    <Select
                        value={this.state.name}
                        onChange={this.handleChange}
                        className={classes.textField}
                        inputProps={{
                            name: 'victim_type',
                            id: 'victim_type',
                        }}>
                        <MenuItem style={{width: '100%'}} value="adult primary">Adult Primary Victim</MenuItem>
                        <Divider />
                        <MenuItem style={{width: '100%'}} value="youth primary">Youth Primary Victim</MenuItem>
                        <Divider />
                        <MenuItem style={{width: '100%'}} value="adult secondary">Adult Secondary Victim</MenuItem>
                        <Divider />
                        <MenuItem style={{width: '100%'}} value="youth secondary">Youth Secondary Victim</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
}

TypeOfVictim.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypeOfVictim);