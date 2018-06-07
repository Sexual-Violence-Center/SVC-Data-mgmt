import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class ChildPornography extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.violence_child_pornography}
                    onChange={this.handleChecked('violence_child_pornography')}
                    name="violence_child_pornography"
                    value={`${!this.props.violence_child_pornography}`}
                />
                <label>
                    Child Pornography
                </label>
            </div>
        )
    }
}

export default ChildPornography;