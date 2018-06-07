import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Checkbox, TextField } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
})

class Other extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    handleChange = (event) => {
        this.props.handleChangeFor(event)
    }
    render() {
        const { classes } = this.props;

        let specify;
        if (this.props.disability_other) {
            specify = <div><TextField
                name="disability_other_specify"
                label="specify"
                className={classes.textField}
                type="text"
                margin="normal"
                value={this.props.disability_other_specify}
                onChange={this.handleChange}
            /></div>
        }
        return (
            <div>
                <Checkbox
                    checked={this.props.disability_other}
                    onChange={this.handleChecked('disability_other')}
                    name="disability_other"
                    value={`${!this.props.disability_other}`}
                />
                <label>
                    Other
                </label>
                {specify}
            </div>
        )
    }
}

Other.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Other);