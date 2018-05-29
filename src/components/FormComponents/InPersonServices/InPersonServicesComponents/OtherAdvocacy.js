import React, { Component } from 'react';

class OtherAdvocacy extends Component {

    handleChange = (event) => {
        this.props.handleChangeFor(event)
    }

    render() {
        return (
            <div className="advocacyServices">
                <label>5. Other In-Person Advocacy Services</label>
                <p>(check any that apply)</p>
                <input type="checkbox" name="information_referral" value={this.props.information_referral} onChange={this.handleChange} /><label htmlFor="information_referral">Information and referral</label>
                <br />
                <input type="checkbox" name="safe_at_home" value={this.props.safe_at_home} onChange={this.handleChange} /><label htmlFor="safe_at_home">Safe at Home registration</label>
                <br />
                <input type="checkbox" name="emergency_financial" value={this.props.emergency_financial} onChange={this.handleChange} /><label htmlFor="emergency_financial">Emergency financial assistance</label>
                <br />
                <input type="checkbox" name="reparations_claims" value={this.props.reparations_claims} onChange={this.handleChange} /><label htmlFor="reparations_claims">Reparations Claims Assistance</label>
            </div>
        )
    }
}

export default OtherAdvocacy;