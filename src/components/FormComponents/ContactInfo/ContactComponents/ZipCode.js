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

class ZipCode extends Component {
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
                    name="victim_zipcode"
                    label="Zip Code"
                    className={classes.textField}
                    type="number"
                    margin="normal"
                    value={this.props.victim_zipcode}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

ZipCode.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ZipCode);