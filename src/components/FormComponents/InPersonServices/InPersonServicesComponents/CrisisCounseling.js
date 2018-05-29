import React, { Component } from 'react';

class CrisisCounseling extends Component {

    handleChange = (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div className="crisisCounseling">
                <label>1. Crisis Counseling</label>
                <br />
                <br />
                <input type="checkbox" name="crisis_counseling_individual" value={this.props.crisis_counseling_individual} onChange={this.handleChange} /><label htmlFor="crisis_counseling_individual">One-to-One Counseling</label>
                <input type="checkbox" name="crisis_counseling_group" value={this.props.crisis_counseling_group} onChange={this.handleChange} /><label htmlFor="crisis_counseling_group">Support Group</label>
            </div>
        )
    }
}

export default CrisisCounseling;