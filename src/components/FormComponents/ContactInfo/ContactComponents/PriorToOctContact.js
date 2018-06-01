import React, { Component } from 'react';
import { Radio } from '@material-ui/core';

class PriorToOctContact extends Component {
    constructor() {
        super();
    }

    handleRadio = (event) => {
        this.props.handleChangeFor(event);
    }

    render() {

        return <div>
            <label>If yes, was it before Oct 1, 2017?:</label>
            <Radio checked={`${this.props.victim_contact_prior_oct}` === "true"} onChange={this.handleRadio} value="true" name="victim_contact_prior_oct" aria-label="Yes" />
            Yes
            <Radio checked={`${this.props.victim_contact_prior_oct}` === "false"} onChange={this.handleRadio} value="false" name="victim_contact_prior_oct" aria-label="No" />
            No
            <br />
          </div>;
    }
}

export default PriorToOctContact;