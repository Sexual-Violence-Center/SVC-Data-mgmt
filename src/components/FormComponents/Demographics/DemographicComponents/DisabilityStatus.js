import React, { Component } from 'react';

class DisabilityStatus extends Component {
    render() {
        return (
            <div>
                <h3>Disability Status</h3>

                <input type="checkbox" id="disability_blind" value="disability_blind" /><label htmlFor="disability_blind">Blind/Visually Impaired</label>
                <br />
                <input type="checkbox" id="disability_physical" value="disability_physical" /><label htmlFor="disability_physical">Physical Disabilities</label>
                <br />
                <input type="checkbox" id="disability_mental" value="disability_mental" /><label htmlFor="disability_mental">Mental Illness</label>
                <br />
                <input type="checkbox" id="disability_deaf" value="disability_deaf" /><label htmlFor="disability_deaf">Deaf/Hard of Hearing</label>
                <br />
                <input type="checkbox" id="disability_developmental" value="disability_developmental" /><label htmlFor="disability_developmental">Intellectual or Developmental Disabilities</label>
                <br />
                <input type="checkbox" id="disability_none" value="disability_none" /><label htmlFor="disability_none">None</label>
                <br />
                <input type="checkbox" id="disability_other" value="disability_other" /><label htmlFor="disability_other">Other</label>
                <br />
                <label htmlFor="disability_other_specify">specify</label>
                <input type="text" id="disability_other_specify" />
                <br />
                <input type="checkbox" id="disability_unknown" value="disability_unknown" /><label htmlFor="disability_unknown">Unknown</label>

                <br />
            </div>
        )
    }
}

export default DisabilityStatus;