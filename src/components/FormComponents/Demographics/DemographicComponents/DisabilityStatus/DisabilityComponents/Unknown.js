import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class Unknown extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.disability_unknown}
                    onChange={this.handleChecked('disability_unknown')}
                    name="disability_unknown"
                    value={`${!this.props.disability_unknown}`}
                />
                <label>
                    Unknown
                </label>
            </div>
        )
    }
}

export default Unknown;