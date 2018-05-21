import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class DemographicOther extends Component {
    constructor(){
        super();
        this.state = {
            homeless: '',
            limited_english: '',
            veteran: '',
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

    render() {
        return (
            <div>
                <h3>Other</h3>
                <input type="checkbox" id="homeless" value={this.state.homeless} onChange={this.handleChangeFor}/><label htmlFor="homeless">Currently Homeless</label>
                <br />
                <input type="checkbox" id="limited_english" value={this.state.limited_english} onChange={this.handleChangeFor}/><label htmlFor="limited_english">Limited English Proficiency</label>
                <br />
                <input type="checkbox" id="veteran" value={this.state.veteran} onChange={this.handleChangeFor}/><label htmlFor="veteran">U.S. Veteran</label>
                <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(DemographicOther);