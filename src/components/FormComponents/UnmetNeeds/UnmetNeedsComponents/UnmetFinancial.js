import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class UnmetFinancial extends Component {
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

    render() {
        return <div>
            <Checkbox checked={this.props.unmet_need_financial} onChange={this.handleChecked("unmet_need_financial")} name="unmet_need_financial" value={`${!this.props.unmet_need_financial}`} />
            <label>Financial</label>
          </div>;
    }
}

export default UnmetFinancial;