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

class Orientation extends Component {
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
                <TextField
                    name="victim_sexual_orientation"
                    label="Sexual Orientation"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    value={this.props.victim_sexual_orientation}
                    onChange={this.handleChange}
                />

            </div>
        )
    }
}

Orientation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Orientation);