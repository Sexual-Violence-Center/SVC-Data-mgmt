import React, { Component } from 'react';

class Support extends Component {


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
            <div className="support">
            <h2>Did They Feel Supported?</h2>
            <p><strong>MANDATORY</strong> Did you feel that you were supported on this call?</p>
            <select id="supported_on_call">
                <option value="supported_on_call">yes</option>
                <option value="supported_on_call">no</option>
                <option value="supported_on_call">unknown/hung up</option>
            </select>
        </div>
        )
    }
}

export default Support;