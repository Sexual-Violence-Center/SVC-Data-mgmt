import React, { Component } from 'react';

class TypeOfViolence extends Component {
    render(){
        return(
            <div>
            <h3>Type of Sexual Violence</h3>
            <input type="checkbox" id="violence_adult_sexual" value="violence_adult_sexual"/><label htmlFor="violence_adult_sexual">Adult Sexual Assault</label>
            <br/>
            <input type="checkbox" id="violence_adult_when_child_by_family" value="violence_adult_when_child_by_family"/><label htmlFor="violence_adult_when_child_by_family">Adult abused as child - family</label>
            <br/>
            <input type="checkbox" id="violence_adult_when_child_by_other" value="violence_adult_when_child_by_other"/><label htmlFor="violence_adult_when_child_by_other">Adult abused as child - other</label>
            <br/>
            <input type="checkbox" id="violence_bullying" value="violence_bullying"/><label htmlFor="violence_bullying">Bullying (verbal/cyber/physical)</label>
            <br/>
            <input type="checkbox" id="violence_child_pornography" value="violence_child_pornography"/><label htmlFor="violence_child_pornography">Child Pornography</label>
            <br/>
            <input type="checkbox" id="violence_domestic" value="violence_domestic"/><label htmlFor="violence_domestic">Domestic Violence</label>
            <br/>
            <input type="checkbox" id="violence_elder" value="violence_elder"/><label htmlFor="violence_elder">Elder Abuse</label>
            <br/>
            <input type="checkbox" id="violence_exposing" value="violence_exposing"/><label htmlFor="violence_exposing">Exposing</label>
            <br/>
            <input type="checkbox" id="violence_internet" value="violence_internet"/><label htmlFor="violence_internet">Internet Related</label>
            <br/>
            <input type="checkbox" id="violence_minor_by_family" value="violence_minor_by_family"/><label htmlFor="violence_minor_by_family">Minor/CSA - family</label>
            <br/>
            <input type="checkbox" id="violence_minor_by_other" value="violence_minor_by_other"/><label htmlFor="violence_minor_by_other">Minor/CSA - other</label>
            <br/>
            <input type="checkbox" id="violence_phone" value="violence_phone"/><label htmlFor="violence_phone">Obscene Phone Call</label>
            <br/>
            <input type="checkbox" id="violence_exploitation_trafficking" value="violence_exploitation_trafficking"/><label htmlFor="violence_exploitation_trafficking">Sexual exploitation/trafficking/prostitution</label>
            <br/>
            <input type="checkbox" id="violence_harassment" value="violence_harassment"/><label htmlFor="violence_harassment">Sexual Harassment</label>
            <br/>
            <input type="checkbox" id="violence_stalking" value="violence_stalking"/><label htmlFor="violence_stalking">Stalking</label>
            <br/>
            <input type="checkbox" id="violence_teen_dating" value="violence_teen_dating"/><label htmlFor="violence_teen_dating">Teen Dating</label>
            <br/>
            <input type="checkbox" id="violence_other" value="violence_other"/><label htmlFor="violence_other">Other</label>
            <br/>
            <label>specify:</label>
            <input type="text" />
            <br/>
            <input type="checkbox" id="violence_unknown" value="violence_unknown"/><label htmlFor="violence_unknown">Unknown/pass/doesn't know</label>
            <br/>
            </div>
        )
    }
}

export default TypeOfViolence;