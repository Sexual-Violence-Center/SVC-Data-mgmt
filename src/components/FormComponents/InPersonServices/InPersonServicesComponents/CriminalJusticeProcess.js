import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class CriminalJusticeProcess extends Component {
    constructor() {
        super();
        //state will be for determining which checkbox has been checked.
        // if false, don't show as checked, true is checked.
        this.state = {
            checked1: false,
            checked2: false,
            checked3: false,
        }
    }
    static getDerivedStateFromProps(props, state){
        if (props.legal_law_enforcement_interview != undefined){
            state = {...state, checked1: props.legal_law_enforcement_interview}
        } 
        if (props.legal_prosecution_related != undefined){
            state= { ...state, checked2: props.legal_prosecution_related };
        } 
         if (props.legal_court_advocacy != undefined){
            state = {...state, checked3: props.legal_court_advocacy};
        } 
        return state;
    }



    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
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
                    checked={this.state.checked1}
                    onChange={this.handleChecked('legal_law_enforcement_interview')}
                    name="legal_law_enforcement_interview"
                    value={`${!this.state.checked1}`}
                />
                <label>
                    Law Enforcement Interview
                                        </label>
                <Checkbox
                    checked={this.state.checked2}
                    onChange={this.handleChecked('legal_prosecution_related')}
                    name="legal_prosecution_related"
                    value={`${!this.state.checked2}`}
                />
                <label>
                    Prosecution-related Advocacy
                </label>
                <br />
                <Checkbox
                    checked={this.state.checked3}
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