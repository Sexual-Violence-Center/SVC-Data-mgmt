import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class OtherEmergency extends Component {
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
                    checked={this.props.other_emergency_justice}
                    onChange={this.handleChecked('other_emergency_justice')}
                    name="other_emergency_justice"
                    value={`${!this.props.other_emergency_justice}`}
                />
                <label>
                Other emergency justice-related assistance
                </label>
            </div>
        )
    }
}

export default OtherEmergency;