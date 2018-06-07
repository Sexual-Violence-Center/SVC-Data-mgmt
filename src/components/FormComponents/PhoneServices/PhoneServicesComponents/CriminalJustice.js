import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class CriminalJustice extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.information_criminal_justice}
                    onChange={this.handleChecked('information_criminal_justice')}
                    name="information_criminal_justice"
                    value={`${!this.props.information_criminal_justice}`}
                />
                <label>
                Information about the criminal justice process
                </label>
            </div>
        )
    }
}

export default CriminalJustice;