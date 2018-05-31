import React, { Component } from 'react';
import { Radio } from '@material-ui/core';

class UsedServicesBefore extends Component {
    // State will only be used for determining which radio button visually looks selected.
    // When checked, the radio button value will be set to state, and look checked.
    state = {
        radio: ''
    }

    // function to handle the checking of the radio buttons and sending it's respective value 
    // back to InPersonServices to know which value has been chosen.
    handleChange = (event) => {
        this.setState({radio: event.target.value});
        this.props.handleChangeFor(event);
    }

    render() {

        return (
            <div className="usedSinceOctContainer">
                <label><strong>6. Has the victim/survivor used this type of in-person service since October 1, 2017?</strong></label>
                <br />
                <br />
                <Radio
                    checked={this.state.radio === "true"}
                    onChange={this.handleChange}
                    value="true"
                    name="in_person_services_received_prior_oct"
                    aria-label="Yes"
                />
                Yes
                <Radio
                    checked={this.state.radio === "false"}
                    onChange={this.handleChange}
                    value="false"
                    name="in_person_services_received_prior_oct"
                    aria-label="No"
                />
                No
            </div>
        )
    }
}



export default UsedServicesBefore;