import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class Physical extends Component {
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
                    checked={this.props.disability_physical}
                    onChange={this.handleChecked('disability_physical')}
                    name="disability_physical"
                    value={`${!this.props.disability_physical}`}
                />
                <label>
                Physical Disabilities
                </label>
            </div>
        )
    }
}

export default Physical;