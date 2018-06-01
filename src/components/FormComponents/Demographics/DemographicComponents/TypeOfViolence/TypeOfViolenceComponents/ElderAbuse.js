import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class ElderAbuse extends Component {
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
                    checked={this.props.violence_elder}
                    onChange={this.handleChecked('violence_elder')}
                    name="violence_elder"
                    value={`${!this.props.violence_elder}`}
                />
                <label>
                    Elder Abuse
                </label>
            </div>
        )
    }
}

export default ElderAbuse;