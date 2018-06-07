import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class Homeless extends Component {

    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.homeless}
                    onChange={this.handleChecked('homeless')}
                    name="homeless"
                    value={`${!this.props.homeless}`}
                />
                <label>
                    Currently Homeless
                </label>
            </div>
        )
    }
}

export default Homeless;