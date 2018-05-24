import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class AdvocacyCriminalCustom extends Component {
    constructor() {
        super();
        this.state = {
            criminal_advocacy: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            criminal_advocacy: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom In-Person Legal Advocacy (Criminal) Report: </h4>
                <form value={this.state.criminal_advocacy} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "law_enforcement_interview"
                            value = "law_enforcement_interview"
                        />
                        < label htmlFor = "law_enforcement_interview" >
                            Law Enforcement Interview
                        </label>

                        <input type="checkbox" 
                            id = "legal_prosecution_related"
                            value = "legal_prosecution_related"
                        />
                        < label htmlFor = "legal_prosecution_related" >
                            Prosecution - Related Advocacy
                        </label>

                        <input type="checkbox" 
                            id = "legal_court_advocacy"
                            value = "legal_court_advocacy"
                        />
                        < label htmlFor = "legal_court_advocacy" >
                            Court Advocacy (Criminal Case)
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(AdvocacyCriminalCustom)