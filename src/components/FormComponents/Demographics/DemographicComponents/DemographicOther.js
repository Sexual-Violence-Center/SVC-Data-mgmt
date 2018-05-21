import React, { Component } from 'react';

class DemographicOther extends Component {
    render() {
        return (
            <div>
                <h3>Other</h3>
                <input type="checkbox" id="homeless" value="homeless" /><label htmlFor="homeless">Currently Homeless</label>
                <br />
                <input type="checkbox" id="limited_english" value="limited_english" /><label htmlFor="limited_english">Limited English Proficiency</label>
                <br />
                <input type="checkbox" id="veteran" value="veteran" /><label htmlFor="veteran">U.S. Veteran</label>
                <br />
            </div>
        )
    }
}

export default DemographicOther;