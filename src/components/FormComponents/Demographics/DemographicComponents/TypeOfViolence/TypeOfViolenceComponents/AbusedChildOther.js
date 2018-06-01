import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class AbusedChildOther extends Component {
    constructor() {
        super();
    }
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.violence_adult_when_child_by_other}
                    onChange={this.handleChecked('violence_adult_when_child_by_other')}
                    name="violence_adult_when_child_by_other"
                    value={`${!this.props.violence_adult_when_child_by_other}`}
                />
                <label>
                    Adult abused as child - other
                </label>
            </div>
        )
    }
}

export default AbusedChildOther;