import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox, TextField } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
})

class CrisisCounseling extends Component {
    constructor() {
        super();
        //state will be for determining which checkbox has been checked.
        // if false, don't show as checked, true is checked.
        this.state = {
            checked: false,
            other: ''
        }
    }
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.setState({ checked: event.target.checked });
        this.props.handleChangeFor(event);
    }

    handleChange = (event) => {
        this.setState({ other: event.target.value });
        this.props.handleChangeFor(event);
    }

    render() {
        const { classes } = this.props;


        let unmetOtherSpecify;
        if (this.state.checked){
            unmetOtherSpecify = <div>
                <TextField
                    name="unmet_other_descr"
                    label="Specify Other"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    value={this.props.unmet_other_descr}
                    onChange={this.handleChange}
                />
            </div>
        }
        return (
            <div>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('unmet_need_other')}
                    name="unmet_need_other"
                    value={`${!this.state.checked}`}
                />
                <label>
                    Other
                </label>
                {unmetOtherSpecify}
            </div>
        )
    }
}



export default withStyles(styles)(CrisisCounseling);