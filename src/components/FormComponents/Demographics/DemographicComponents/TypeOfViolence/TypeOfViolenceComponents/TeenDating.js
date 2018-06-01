import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class TeenDating extends Component {
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
                    checked={this.props.violence_teen_dating}
                    onChange={this.handleChecked('violence_teen_dating')}
                    name="violence_teen_dating"
                    value={`${!this.props.violence_teen_dating}`}
                />
                <label>
                    Teen Dating
                </label>
            </div>
        )
    }
}

export default TeenDating;