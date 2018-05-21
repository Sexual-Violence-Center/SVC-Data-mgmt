import React, { Component } from 'react';

class Support extends Component {
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