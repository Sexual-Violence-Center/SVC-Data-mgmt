import React, { Component } from 'react';

class DisabilityStatus extends Component {
    render() {
        return (
            <div>
                <h3>Disability Status</h3>
                <input type="checkbox" id="disability_blind" value="disability_blind" /><label for="disability_blind">Blind/Visually Impaired</label>
                <br />
                <input type="checkbox" id="disability_physical" value="disability_physical" /><label for="disability_physical">Physical Disabilities</label>
                <br />
                <input type="checkbox" id="disability_mental" value="disability_mental" /><label for="disability_mental">Mental Illness</label>
                <br />
                <input type="checkbox" id="disability_deaf" value="disability_deaf" /><label for="disability_deaf">Deaf/Hard of Hearing</label>
                <br />
                <input type="checkbox" id="disability_developmental" value="disability_developmental" /><label for="disability_developmental">Intellectual or Developmental Disabilities</label>
                <br />
                <input type="checkbox" id="disability_none" value="disability_none" /><label for="disability_none">None</label>
                <br />
                <input type="checkbox" id="disability_other" value="disability_other" /><label for="disability_other">Other</label>
                <br />
                <label for="disability_other_specify">specify</label>
                <input type="text" id="disability_other_specify" />
                <br />
                <input type="checkbox" id="disability_unknown" value="disability_unknown" /><label for="disability_unknown">Unknown</label>
                <br />
            </div>
        )
    }
}

export default DisabilityStatus;