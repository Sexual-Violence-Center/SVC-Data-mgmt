import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class OtherAdvocacy extends Component {
    constructor() {
        super();
        //state will be for determining which checkbox has been checked.
        // if false, don't show as checked, true is checked.
        this.state = {

        }
    }

    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {

        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div className="advocacyServices">
                <label><strong>5. Other In-Person Advocacy Services</strong></label>
                <p>(check any that apply)</p>
                <Checkbox
                    checked={this.props.information_referral}
                    onChange={this.handleChecked('information_referral')}
                    name="information_referral"
                    value={`${!this.props.information_referral}`}
                />
                <label>
                    Information and referral
                </label>
                <br />
                <Checkbox
                    checked={this.props.safe_at_home}
                    onChange={this.handleChecked('safe_at_home')}
                    name="safe_at_home"
                    value={`${!this.props.safe_at_home}`}
                />
                <label>
                    Safe at Home registration
                </label>
                <br />
                <Checkbox
                    checked={this.props.emergency_financial}
                    onChange={this.handleChecked('emergency_financial')}
                    name="emergency_financial"
                    value={`${!this.props.emergency_financial}`}
                />
                <label>
                    Emergency financial assistance
                </label>
                <br/>
                <Checkbox
                    checked={this.props.reparations_claims}
                    onChange={this.handleChecked('reparations_claims')}
                    name="reparations_claims"
                    value={`${!this.props.reparations_claims}`}
                />
                <label>
                    Reparations Claims Assistance
                </label>
                <br />
            </div>
        )
    }
}

export default OtherAdvocacy;