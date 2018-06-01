import React, { Component } from 'react';
import { Checkbox, TextField } from '@material-ui/core';

class UnmetHousing extends Component {
    constructor() {
        super();
        //state will be for determining which checkbox has been checked.
        // if false, don't show as checked, true is checked.
        this.state = {
        }
    }
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = name => (event) => {
        this.props.handleChangeFor(event)
    }

    handleChange = (event) => {
        this.props.handleChangeFor(event);
    }

    render() {
        let unmetHousing;
        if (this.props.unmet_need_shelter_housing){
            unmetHousing = <div>
                <TextField
                    name="unmet_need_staying_where"
                    label="If shelter was unavailable, where did the v/s stay?"
                    style={{width: 500}}
                    type="text"
                    margin="normal"
                    value={this.props.unmet_need_staying_where}
                    onChange={this.handleChange}
                />
            </div>
        }
        return (
            <div>
                <Checkbox
                    checked={this.props.unmet_need_shelter_housing}
                    onChange={this.handleChecked('unmet_need_shelter_housing')}
                    name="unmet_need_shelter_housing"
                    value={`${!this.props.unmet_need_shelter_housing}`}
                />
                <label>
                    Shelter/Housing
                </label>
                {unmetHousing}
            </div>
        )
    }
}

export default UnmetHousing;