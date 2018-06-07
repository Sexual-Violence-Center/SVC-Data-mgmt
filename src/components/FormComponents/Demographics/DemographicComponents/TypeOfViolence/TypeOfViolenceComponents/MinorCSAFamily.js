import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class MinorCSAFamily extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.violence_minor_by_family}
                    onChange={this.handleChecked('violence_minor_by_family')}
                    name="violence_minor_by_family"
                    value={`${!this.props.violence_minor_by_family}`}
                />
                <label>
                    Minor/CSA - family
                </label>
            </div>
        )
    }
}

export default MinorCSAFamily;