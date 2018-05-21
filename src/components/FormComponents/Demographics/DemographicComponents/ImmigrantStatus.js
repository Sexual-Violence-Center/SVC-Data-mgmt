import React, { Component } from 'react';

class ImmigrantStatus extends Component {
    render() {
        return (
            <div>
                <h3>Immigrant Status</h3>
                <select>
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="mex/cen/south america">Mex/Cen/South America</option>
                    <option value="middle east">Middle East</option>
                    <option value="other">Other</option>
                    <option value="no">No</option>
                    <option value="unknown/pass">Unknown/Pass</option>
                </select>
                <label>
                    If Other, please specify
                <input type="text" />
                </label>
            </div>
        )
    }
}

export default ImmigrantStatus;