import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class OtherEmergency extends Component {
    constructor() {
        super();
        //state will be for determining which checkbox has been checked.
        // if false, don't show as checked, true is checked.
        this.state = {
            checked: false,
        }
    }
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.setState({ checked: event.target.checked })
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('other_emergency_justice')}
                    name="other_emergency_justice"
                    value={`${!this.state.checked1}`}
                />
                <label>
                Other emergency justice-related assistance
                </label>
            </div>
        )
    }
}

export default OtherEmergency;