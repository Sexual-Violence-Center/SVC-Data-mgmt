import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class CivilLegalProcess extends Component {
    constructor() {
        super();
        //state will be for determining which checkbox has been checked.
        // if false, don't show as checked, true is checked.
        this.state = {
            checked1: false,
            checked2: false,
            checked3: false
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
            <div className="civilLegalProcess">
                <label><strong>3. Legal Advocacy: Civil Legal Process</strong></label>
                <br />
                <br />
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('legal_ofp_hro')}
                    name="legal_ofp_hro"
                    value={`${!this.state.checked1}`}
                />
                <label>
                    Assistance Obtaining OFP or HRO
                </label>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('legal_immigration')}
                    name="legal_immigration"
                    value={`${!this.state.checked2}`}
                />
                <label>
                    Immigration-related support(U Visa, etc.)
                </label>
                <br />
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('legal_intervention')}
                    name="legal_intervention"
                    value={`${!this.state.checked3}`}
                />
                <label>
                    Intervention with landlord, academic institution, or creditor
                </label>
            </div>
        )
    }
}

export default CivilLegalProcess;