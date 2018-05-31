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

class OtherViolence extends Component {
    constructor() {
        super();
        //state will be for determining which checkbox has been checked.
        // if false, don't show as checked, true is checked.
        this.state = {
            checked: false,
            specify: ''
        }
    }
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.setState({ checked: event.target.checked })
        this.props.handleChangeFor(event)
    }

    handleChange = (event) => {
        this.setState({ specify: event.target.value })
        this.props.handleChangeFor(event)
    }
    render() {
        const { classes } = this.props;

        let specify;
        if (this.state.checked) {
            specify = <div><TextField
                name="violence_other_specify"
                label="specify"
                className={classes.textField}
                type="text"
                margin="normal"
                value={this.state.violence_other_specify}
                onChange={this.handleChange}
            /></div>
        }
        return (
            <div>
                <br />
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('violence_other')}
                    name="violence_other"
                    value={`${!this.state.checked1}`}
                />
                <label>
                    Other
                </label>
                {specify}
            </div>
        )
    }
}

OtherViolence.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OtherViolence);