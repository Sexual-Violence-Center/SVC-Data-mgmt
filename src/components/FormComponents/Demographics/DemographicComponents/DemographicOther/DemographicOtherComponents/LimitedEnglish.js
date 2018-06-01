import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class LimitedEnglish extends Component {
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
                    checked={this.props.limited_english}
                    onChange={this.handleChecked('limited_english')}
                    name="limited_english"
                    value={`${!this.props.limited_english}`}
                />
                <label>
                    Limited English Proficiency 
                </label>
            </div>
        )
    }
}

export default LimitedEnglish;