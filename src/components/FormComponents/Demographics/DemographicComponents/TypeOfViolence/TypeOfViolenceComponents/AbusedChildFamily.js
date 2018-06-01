import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class AbusedChildFamily extends Component {
    constructor() {
        super();
    }
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.setState({ checked: event.target.checked })
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.violence_adult_when_child_by_family}
                    onChange={this.handleChecked('violence_adult_when_child_by_family')}
                    name="violence_adult_when_child_by_family"
                    value={`${!this.props.violence_adult_when_child_by_family}`}
                />
                <label>
                Adult abused as child - family
                </label>
            </div>
        )
    }
}

export default AbusedChildFamily;