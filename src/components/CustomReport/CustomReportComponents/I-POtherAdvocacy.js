import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class AdvocacyOtherCustom extends Component {
    constructor() {
        super();
        this.state = {
            other_advocacy: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            other_advocacy: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom In-Person Other Advocacy Report: </h4>
                <form value={this.state.other_advocacy} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "information_referral_person"
                            value = "information_referral_person"
                        />
                        < label htmlFor = "information_referral_person" >
                            Information and Referral
                        </label>

                        <input type="checkbox" 
                            id = "safe_at_home"
                            value = "safe_at_home"
                        />
                        < label htmlFor = "safe_at_home" >
                            Safe at Home Registration
                        </label>

                        <input type="checkbox" 
                            id = "emergency_financial"
                            value = "emergency_financial"
                        />
                        < label htmlFor = "emergency_financial" >
                            Emergency Financial Assistance
                        </label>

                        <input type="checkbox" 
                            id = "reparations_claims"
                            value = "reparations_claims"
                        />
                        < label htmlFor = "reparations_claims" >
                            Reparations Claims Assistance
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(AdvocacyOtherCustom)