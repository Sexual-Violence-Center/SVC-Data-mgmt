import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class AdultSexualAssault extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.violence_adult_sexual}
                    onChange={this.handleChecked('violence_adult_sexual')}
                    name="violence_adult_sexual"
                    value={`${!this.props.violence_adult_sexual}`}
                />
                <label>
                    Adult Sexual Assault
                </label>
            </div>
        )
    }
}

export default AdultSexualAssault;