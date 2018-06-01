import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class DomesticViolence extends Component {
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
                    checked={this.props.violence_domestic}
                    onChange={this.handleChecked('violence_domestic')}
                    name="violence_domestic"
                    value={`${!this.props.violence_domestic}`}
                />
                <label>
                Domestic Violence
                </label>
            </div>
        )
    }
}

export default DomesticViolence;