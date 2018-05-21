import React, { Component } from 'react';

class Survey extends Component {
    render() {
        return (
            <div>
                <h2>Demographics Survey</h2>

                <label htmlFor="victim_age">Age:</label>
                <input type="number" id="victim_age" />
                <label htmlFor="victim_gender">Gender:</label>
                <input type="text" id="victim_gender" />
                <label htmlFor="victim_transgender">Transgender:</label>
                <select id="victim_transgender">
                    <option value="victim_transgender">yes</option>
                    <option value="victim_transgender">no</option>
                    <option value="victim_transgender">unknown/pass</option>
                </select>

                <label htmlFor="victim_sexual_orientation">Sexual Orientation</label>
                <input type="text" id="victim_sexual_orientation" />
                <label htmlFor="victim_gender_pronouns">Gender Pronouns</label>
                <input type="text" id="victim_gender_pronouns" />
            </div>
        )
    }
}

export default Survey;