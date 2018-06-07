import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

class CrisisCounseling extends Component {
    constructor() {
        super();
        //state will be for determining which checkbox has been checked.
        // if false, don't show as checked, true is checked.
        this.state = {
            checked1: false,
            checked2: false
        }
    }

    static getDerivedStateFromProps(props, state){

        if(props.crisis_counseling_individual !== undefined){
            state= {...state, checked1: props.crisis_counseling_individual};
        }
        if(props.crisis_counseling_group !== undefined){
            state = {...state, checked2: props.crisis_counseling_group}
        } 
        return state;
        
    }
    // Once one of the checkboxes is checked, look for the name and tell InPersonServices which
    // one has been clicked and set it's value to whichever boolean corresponds to it's checked status
    handleChecked = check => (event) => {
        this.setState({ [check]: this.state[check]})
        this.props.handleChangeFor(event)
    }

    handleChecked2 =(event)=>{
        this.setState({checked2: !this.state.checked2})
        this.props.handleChangeFor(event);
    }

    render() {
        return <div className="crisisCounseling">
            <label>
              <strong>1. Crisis Counseling</strong>
            </label>
            <br />
            <br />
            <Checkbox checked={this.state.checked1} onChange={this.handleChecked("checked1")} name="crisis_counseling_individual" value={`${!this.state.checked1}`} />
            <label>One-to-One Counseling</label>
            <Checkbox checked={this.state.checked2} onChange={this.handleChecked2} name="crisis_counseling_group" value={`${!this.state.checked2}`} />
            <label>Support Group</label>
          </div>;
    }
}

export default CrisisCounseling;