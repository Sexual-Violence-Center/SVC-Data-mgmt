import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class Harassment extends Component {
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
                    checked={this.props.violence_harassment}
                    onChange={this.handleChecked('violence_harassment')}
                    name="violence_harassment"
                    value={`${!this.props.violence_harassment}`}
                />
                <label>
                Sexual Harassment
                </label>
            </div>
        )
    }
}

export default Harassment;