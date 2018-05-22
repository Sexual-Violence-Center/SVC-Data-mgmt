import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class Referrals extends Component {
    constructor(){
        super()
        this.state = {
            referral_svc: '',
            referral_agency: '',
            referral_other: ''
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        this.props.dispatch({
            type: 'ENTRY_FORM_DATA', 
            payload: {...this.state, [name]: value }
        })
    }

    render(){
        return(
            <div className="referrals">
            <h2>Referrals</h2>
            <p>(please fill in name of organization)</p>
            <form>
            <label htmlFor="referral_svc">SVC Services:</label>
            <input type="text" name="referral_svc" value={this.state.referral_svc} onChange={this.handleChangeFor}/>
            <br/>
            <label htmlFor="referral_agency">Other advocacy agency:</label>
            <input type="text" name="referral_agency" value={this.state.referral_agency} onChange={this.handleChangeFor}/>
            <br/>
            <label htmlFor="referral_other">Other services, support and resources(specify):</label>
            <input type="text" name="referral_other" value={this.state.referral_other} onChange={this.handleChangeFor}/>
            <br/>
            </form>
        </div>
        )
    }
}

export default connect(mapStateToProps)(Referrals);