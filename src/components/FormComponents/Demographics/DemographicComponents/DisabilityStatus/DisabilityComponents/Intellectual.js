import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class Intellectual extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.disability_developmental}
                    onChange={this.handleChecked('disability_developmental')}
                    name="disability_developmental"
                    value={`${!this.props.disability_developmental}`}
                />
                <label>
                    Intellectual or Developmental Disabilities
                </label>
            </div>
        )
    }
}

export default Intellectual;