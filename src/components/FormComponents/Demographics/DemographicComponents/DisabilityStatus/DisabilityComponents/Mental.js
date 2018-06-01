import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class Mental extends Component {
    constructor() {
        super();
    }
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.disability_mental}
                    onChange={this.handleChecked('disability_mental')}
                    name="disability_mental"
                    value={`${!this.props.disability_mental}`}
                />
                <label>
                    Mental Illness
                </label>
            </div>
        )
    }
}

export default Mental;