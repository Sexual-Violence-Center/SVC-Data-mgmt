import React, { Component } from 'react';

class CriminalJusticeProcess extends Component {

    handleChange = (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div className="justiceProcess">
            <label>2. Legal Advocacy: Criminal Justice Process</label>
            <br />
            <br />
            <input type="checkbox" id="legal_law_enforcement_interview" name="legal_law_enforcement_interview" value={this.props.legal_law_enforcement_interview} onChange={this.handleChange} /><label htmlFor="legal_law_enforcement_interview">Law Enforcement Interview</label>
            <input type="checkbox" id="legal_prosecution_related" name="legal_prosecution_related" value={this.props.legal_prosecution_related} onChange={this.handleChange} /><label htmlFor="legal_prosecution_related">Prosecution-related Advocacy</label>
            <input type="checkbox" id="legal_court_advocacy" name="legal_court_advocacy" value={this.props.legal_court_advocacy} onChange={this.handleChange} /><label htmlFor="legal_court_advocacy">Court Advocacy(criminal case)</label>
        </div>
        )
    }
}

export default CriminalJusticeProcess;