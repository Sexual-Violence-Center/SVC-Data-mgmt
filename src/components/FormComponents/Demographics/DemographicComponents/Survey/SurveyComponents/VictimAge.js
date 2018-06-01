import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class VictimAge extends Component {
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
                <TextField
                    name="victim_age"
                    label="Age"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    value={this.props.victim_age}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

VictimAge.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VictimAge);