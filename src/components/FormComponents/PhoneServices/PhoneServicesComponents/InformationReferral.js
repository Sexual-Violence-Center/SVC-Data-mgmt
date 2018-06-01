import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class InformationReferral extends Component {
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
                    checked={this.props.information_referral}
                    onChange={this.handleChecked('information_referral')}
                    name="information_referral"
                    value={`${!this.props.information_referral}`}
                />
                <label>
                Info and/or referral(including appointments/intakes for service
                </label>
            </div>
        )
    }
}

export default InformationReferral;