import React, { Component } from 'react';
import { Radio, Checkbox } from '@material-ui/core';

class PriorToOctContact extends Component {
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

        return (
            <div>
                <label>
                If yes, was it before Oct 1, 2017?:
                </label>
                <Radio
                    checked={this.state.radio === "true"}
                    onChange={this.handleRadio}
                    value="true"
                    name="victim_contact_prior_oct"
                    aria-label="Yes"
                />
                Yes
                <Radio
                    checked={this.state.radio === "false"}
                    onChange={this.handleRadio}
                    value="false"
                    name="victim_contact_prior_oct"
                    aria-label="No"
                />
                No
                <br />

            </div>
        )
    }
}

export default PriorToOctContact;