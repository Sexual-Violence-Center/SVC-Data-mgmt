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

class StartTime extends Component {

    handleChange = (event) => {
        this.props.handleChangeFor(event);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    name="start_time"
                    label="Start Time"
                    className={classes.textField}
                    type="time"
                    value={this.props.start_time}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        )
    }
}

StartTime.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StartTime);