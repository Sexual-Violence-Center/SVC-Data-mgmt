import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class AdvocacyCivilCustom extends Component {
    constructor() {
        super();
        this.state = {
            civil_advocacy: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            civil_advocacy: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom In-Person Legal Advocacy (Civil) Report: </h4>
                <form value={this.state.civil_advocacy} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "ofp_hro"
                            value = "ofp_hro"
                        />
                        < label htmlFor = "ofp_hro" >
                            Assistance Obtaining OFP or HRO                        
                        </label>

                        <input type="checkbox" 
                            id = "legal_immigration"
                            value = "legal_immigration"
                        />
                        < label htmlFor = "legal_immigration" >
                            Immigration - Related Support
                        </label>

                        <input type="checkbox" 
                            id = "legal_intervention"
                            value = "legal_intervention"
                        />
                        < label htmlFor = "legal_intervention" >
                            Intervention with Landlord, Academic Institution or Creditor
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(AdvocacyCivilCustom)