import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class OtherAdvocacy extends Component {
    constructor() {
        super();
        //state will be for determining which checkbox has been checked.
        // if false, don't show as checked, true is checked.
        this.state = {
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false
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
            <div className="advocacyServices">
                <label><strong>5. Other In-Person Advocacy Services</strong></label>
                <p>(check any that apply)</p>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('information_referral')}
                    name="information_referral"
                    value={`${!this.state.checked1}`}
                />
                <label>
                    Information and referral
                </label>
                <br />
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('safe_at_home')}
                    name="safe_at_home"
                    value={`${!this.state.checked2}`}
                />
                <label>
                    Safe at Home registration
                </label>
                <br />
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('emergency_financial')}
                    name="emergency_financial"
                    value={`${!this.state.checked3}`}
                />
                <label>
                    Emergency financial assistance
                </label>
                <br/>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('reparations_claims')}
                    name="reparations_claims"
                    value={`${!this.state.checked4}`}
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