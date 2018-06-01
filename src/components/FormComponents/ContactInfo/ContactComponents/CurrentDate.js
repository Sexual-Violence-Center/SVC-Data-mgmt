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

class CurrentDate extends Component {
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
                    name="date_entered"
                    label="Date"
                    className={classes.textField}
                    type="date"
                    margin="normal"
                    value={this.props.date_entered}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        )
    }
}

CurrentDate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentDate);