import React, { Component } from 'react';

class CivilLegalProcess extends Component {

    handleChange = (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div className="civilLegalProcess">
            <label>3. Legal Advocacy: Civil Legal Process</label>
            <br />
            <br />
            <input type="checkbox" name="legal_ofp_hro" value={this.props.legal_ofp_hro} onChange={this.handleChange} /><label htmlFor="legal_ofp_hro">Assistance Obtaining OFP or HRO</label>
            <input type="checkbox" name="legal_immigration" value={this.props.legal_immigration} onChange={this.handleChange} /><label htmlFor="legal_immigration">Immigration-related support(U Visa, etc.)</label>
            <br />
            <input type="checkbox" name="legal_intervention" value={this.props.legal_intervention} onChange={this.handleChange} /><label htmlFor="legal_intervention">Intervention with landlord, academic institution, or creditor</label>
        </div>
        )
    }
}

export default CivilLegalProcess;