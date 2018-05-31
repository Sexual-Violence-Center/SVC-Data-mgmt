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

class Gender extends Component {
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
                    name="victim_gender"
                    label="Gender"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    value={this.props.victim_gender}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

Gender.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gender);