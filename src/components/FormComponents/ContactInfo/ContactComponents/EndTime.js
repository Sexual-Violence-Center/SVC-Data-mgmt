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

class EndTime extends Component {

    handleChange = (event) => {
        this.props.handleChangeFor(event);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    name="end_time"
                    label="End Time"
                    className={classes.textField}
                    type="time"
                    value={this.props.end_time}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        )
    }
}

EndTime.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EndTime);