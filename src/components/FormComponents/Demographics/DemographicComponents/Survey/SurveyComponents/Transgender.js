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
        minWidth: 110,
    },
});

class Transgender extends Component {
    constructor() {
        super();
        this.state = {
            transgender: ''
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
                    <InputLabel htmlFor="victim_transgender">Transgender</InputLabel>
                    <Select
                        value={this.props.victim_transgender}
                        onChange={this.handleChange}
                        className={classes.textField}
                        inputProps={{
                            name: 'victim_transgender',
                            id: 'victim_transgender',
                        }}>
                        <MenuItem style={{width: '100%'}} value="yes">Yes</MenuItem>
                        <Divider />
                        <MenuItem style={{width: '100%'}} value="no">No</MenuItem>
                        <Divider />
                        <MenuItem style={{width: '100%'}} value="unknown">Unknown</MenuItem>
                        <Divider />
                    </Select>
                </FormControl>
            </div>
        )
    }
}

Transgender.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Transgender);