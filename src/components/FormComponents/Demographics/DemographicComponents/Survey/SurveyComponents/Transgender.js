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
                    <InputLabel htmlFor="victim_transgender">Transgender</InputLabel>
                    <Select
                        value={this.state.name}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'victim_transgender',
                            id: 'victim_transgender',
                        }}>
                        <Divider />
                        <MenuItem value="yes">Yes</MenuItem>
                        <Divider />
                        <MenuItem value="no">No</MenuItem>
                        <Divider />
                        <MenuItem value="unknown">Unknown</MenuItem>
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