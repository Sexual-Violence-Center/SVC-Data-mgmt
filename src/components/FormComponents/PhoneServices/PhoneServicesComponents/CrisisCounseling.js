import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class CrisisCounseling extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.crisis_counseling}
                    onChange={this.handleChecked('crisis_counseling')}
                    name="crisis_counseling"
                    value={`${!this.props.crisis_counseling}`}
                />
                <label>
                Crisis Counseling
                </label>
            </div>
        )
    }
}

export default CrisisCounseling;