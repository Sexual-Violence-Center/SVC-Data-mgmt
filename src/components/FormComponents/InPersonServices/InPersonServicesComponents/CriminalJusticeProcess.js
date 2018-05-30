import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class CriminalJusticeProcess extends Component {
    constructor() {
        super();
        this.state = {
            checked1: false,
            checked2: false,
            checked3: false,
        }
    }

    handleChecked = name => (event) => {
        this.setState({ checked: event.target.checked })
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div className="justiceProcess">
                <label><strong>2. Legal Advocacy: Criminal Justice Process</strong></label>
                <br />
                <br />
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('legal_law_enforcement_interview')}
                    name="legal_law_enforcement_interview"
                    value={`${!this.state.checked1}`}
                />
                <label>
                    Law Enforcement Interview
                                        </label>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('legal_prosecution_related')}
                    name="legal_prosecution_related"
                    value={`${!this.state.checked2}`}
                />
                <label>
                    Prosecution-related Advocacy
                    </label>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChecked('legal_court_advocacy')}
                    name="legal_court_advocacy"
                    value={`${!this.state.checked3}`}
                />
                <label>
                    Court Advocacy(criminal case)
                    </label>
            </div>
        )
    }
}

export default CriminalJusticeProcess;