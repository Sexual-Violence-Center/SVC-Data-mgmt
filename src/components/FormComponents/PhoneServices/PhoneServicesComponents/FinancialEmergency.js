import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class FinancialEmergency extends Component {
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
                    checked={this.props.emergency_financial}
                    onChange={this.handleChecked('emergency_financial')}
                    name="emergency_financial"
                    value={`${!this.props.emergency_financial}`}
                />
                <label>
                Emergency Financial Assistance
                </label>
            </div>
        )
    }
}

export default FinancialEmergency;