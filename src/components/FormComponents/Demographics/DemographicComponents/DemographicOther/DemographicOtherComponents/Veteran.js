import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class Veteran extends Component {
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
                    checked={this.props.veteran}
                    onChange={this.handleChecked('veteran')}
                    name="veteran"
                    value={`${!this.props.veteran}`}
                />
                <label>
                    U.S. Veteran
                </label>
            </div>
        )
    }
}

export default Veteran;