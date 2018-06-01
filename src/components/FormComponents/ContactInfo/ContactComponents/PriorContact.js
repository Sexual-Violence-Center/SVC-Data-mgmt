import React, { Component } from 'react';
import { Radio } from '@material-ui/core';

class PriorContact extends Component {
    constructor() {
        super();
        this.state = {
            radio: ''
        }
    }


    handleRadio = (event) => {
        this.setState({ radio: event.target.value });
        this.props.handleChangeFor(event);
    }

    render() {

        return <div>
            <label>Have they contacted SVC before?:</label>
            <Radio checked={`${this.props.victim_prior_contact}` === "true"} onChange={this.handleRadio} value="true" name="victim_prior_contact" aria-label="Yes" />
            Yes
            <Radio checked={`${this.props.victim_prior_contact}` === "false"} onChange={this.handleRadio} value="false" name="victim_prior_contact" aria-label="No" />
            No
            <br />
          </div>;
    }
}

export default PriorContact;