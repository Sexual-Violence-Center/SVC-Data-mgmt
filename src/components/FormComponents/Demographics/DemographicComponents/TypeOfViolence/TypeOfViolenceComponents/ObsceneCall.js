import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class ObsceneCall extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.violence_phone}
                    onChange={this.handleChecked('violence_phone')}
                    name="violence_phone"
                    value={`${!this.props.violence_phone}`}
                />
                <label>
                Obscene Phone Call
                </label>
            </div>
        )
    }
}

export default ObsceneCall;