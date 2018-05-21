import React, { Component } from 'react';

class Referrals extends Component {
    render(){
        return(
            <div className="referrals">
            <h2>Referrals</h2>
            <p>(please fill in name of organization)</p>

            <label htmlFor="referral_svc">SVC Services:</label>
            <input type="text" id="referral_svc"/>
            <br/>
            <label htmlFor="referral_agency">Other advocacy agency:</label>
            <input type="text" id="referral_agency"/>
            <br/>
            <label htmlFor="referral_other">Other services, support and resources(specify):</label>

            <input type="text" id="referral_other"/>
            <br/>
        </div>
        )
    }
}

export default Referrals;