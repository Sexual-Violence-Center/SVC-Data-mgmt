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

class ContactDate extends Component {
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
                    name="contact_date"
                    label="Contact Date"
                    className={classes.textField}
                    type="date"
                    margin="normal"
                    value={this.props.contact_date}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        )
    }
}

ContactDate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactDate);