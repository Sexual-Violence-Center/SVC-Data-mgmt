import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class ReparationsClaims extends Component {
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
                    checked={this.props.reparations_claims}
                    onChange={this.handleChecked('reparations_claims')}
                    name="reparations_claims"
                    value={`${!this.props.reparations_claims}`}
                />
                <label>
                    Reparations Claims Assistance
                </label>
            </div>
        )
    }
}

export default ReparationsClaims;