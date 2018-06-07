import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class Bullying extends Component {
    
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.props.violence_bullying}
                    onChange={this.handleChecked('violence_bullying')}
                    name="violence_bullying"
                    value={`${!this.props.violence_bullying}`}
                />
                <label>
                    Bullying (verbal/cyber/physical)
                </label>
            </div>
        )
    }
}

export default Bullying;