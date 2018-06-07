import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class None extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.disability_none}
                    onChange={this.handleChecked('disability_none')}
                    name="disability_none"
                    value={`${!this.props.disability_none}`}
                />
                <label>
                    None
                </label>
            </div>
        )
    }
}

export default None;