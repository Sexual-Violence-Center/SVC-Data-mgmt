import React, { Component } from 'react';

class EthnicBackground extends Component {
    render() {
        return (
            <div>
                <h3>Ethnic Background</h3>
                <select>
                    <option value="asian">Asian</option>
                    <option value="african american/black">African American/Black</option>
                    <option value="hispanic/latino">hispanic/latino</option>
                    <option value="multi-racial">Multi-racial</option>
                    <option value="amerIndAlaskaNative">Native American</option>
                    <option value="native hawaiian/pacific islander">Native Hawaiian/Pacific Islander</option>
                    <option value="white non-latino/caucasian">White Non-Latino/Caucasian</option>
                    <option value="other">Other</option>
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

export default EthnicBackground;