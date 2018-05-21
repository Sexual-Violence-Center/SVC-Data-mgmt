import React, { Component } from 'react';

class DemographicOther extends Component {
    render() {
        return (
            <div>
                <h3>Other</h3>
                <input type="checkbox" id="homeless" value="homeless" /><label for="homeless">Currently Homeless</label>
                <br />
                <input type="checkbox" id="limited_english" value="limited_english" /><label for="limited_english">Limited English Proficiency</label>
                <br />
                <input type="checkbox" id="veteran" value="veteran" /><label for="veteran">U.S. Veteran</label>
                <br />
            </div>
        )
    }
}

export default DemographicOther;