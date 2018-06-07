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

class AdvocateName extends Component {

    handleChange = (event) => {
        this.props.handleChangeFor(event);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    name="advocate_name"
                    label="Advocate/Counselor Name"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    value={this.props.advocate_name}
                    onChange={this.handleChange}
                />

            </div>
        )
    }
}

AdvocateName.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvocateName);