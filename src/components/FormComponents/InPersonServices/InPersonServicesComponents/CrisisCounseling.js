import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class CrisisCounseling extends Component {
    constructor() {
        super();
        this.state = {
            checked1: false,
            checked2: false
        }
    }

    handleChecked = name => (event) => {
        this.setState({ checked: event.target.checked })
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div className="crisisCounseling">
                <label><strong>1. Crisis Counseling</strong></label>
                <br />
                <br />
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('crisis_counseling_individual')}
                    name="crisis_counseling_individual"
                    value={`${!this.state.checked1}`}
                />
                <label>
                One-to-One Counseling
                </label> 
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('crisis_counseling_group')}
                    name="crisis_counseling_group"
                    value={`${!this.state.checked2}`}
                />
                <label>
                Support Group
                </label>
            </div>
        )
    }
}

export default CrisisCounseling;