import React, { Component } from 'react';

class UsedServicesBefore extends Component {

    handleChange = (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div className="usedSinceOctContainer">
                <label>6. Has the victim/survivor used this type of in-person service since October 1, 2017?</label>
                <br />
                <br />
                <form value={this.props.in_person_services_received_prior_oct} onChange={this.handleChange}>
                    <input type="radio" name="in_person_services_received_prior_oct" value={true} /><label htmlFor="in_person_services_received_prior_oct">yes</label>
                    <input type="radio" name="in_person_services_received_prior_oct" value={false} /><label htmlFor="in_person_services_received_prior_oct">no</label>
                </form>
            </div>
        )
    }
}

export default UsedServicesBefore;