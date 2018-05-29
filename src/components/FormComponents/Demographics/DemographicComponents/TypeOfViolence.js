import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class TypeOfViolence extends Component {
    constructor(){
        super();
        this.state = {
            violence_adult_sexual: undefined,
            violence_adult_when_child_by_family: undefined,
            violence_adult_when_child_by_other: undefined,
            violence_bullying: undefined,
            violence_child_pornography: undefined,
            violence_domestic: undefined,
            violence_elder: undefined,
            violence_exposing: undefined,
            violence_internet: undefined,
            violence_minor_by_family: undefined,
            violence_minor_by_other: undefined,
            violence_phone: undefined,
            violence_exploitation_trafficking: undefined, 
            violence_harassment: undefined,
            violence_stalking: undefined,
            violence_teen_dating: undefined,
            violence_other: undefined,
            violence_other_specify: '', 
            violence_unknown: undefined,
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked :
                      target.type === ('radio') ? target.checked  : 
                      target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        this.props.dispatch({
          type: this.props.dispatchTo,
          payload: { ...this.state, [name]: value }
        });
    }

    render(){
        return(
            <div>
            <h3>Type of Sexual Violence</h3>
            <input type="checkbox" name="violence_adult_sexual" value={this.state.violence_adult_sexual} onChange={this.handleChangeFor}/><label htmlFor="violence_adult_sexual">Adult Sexual Assault</label>
            <br/>
            <input type="checkbox" name="violence_adult_when_child_by_family" value={this.state.violence_adult_when_child_by_family} onChange={this.handleChangeFor}/><label htmlFor="violence_adult_when_child_by_family">Adult abused as child - family</label>
            <br/>
            <input type="checkbox" name="violence_adult_when_child_by_other" value={this.state.violence_adult_when_child_by_other} onChange={this.handleChangeFor}/><label htmlFor="violence_adult_when_child_by_other">Adult abused as child - other</label>
            <br/>
            <input type="checkbox" name="violence_bullying" value={this.state.violence_bullying} onChange={this.handleChangeFor}/><label htmlFor="violence_bullying">Bullying (verbal/cyber/physical)</label>
            <br/>
            <input type="checkbox" name="violence_child_pornography" value={this.state.violence_child_pornography} onChange={this.handleChangeFor}/><label htmlFor="violence_child_pornography">Child Pornography</label>
            <br/>
            <input type="checkbox" name="violence_domestic" value={this.state.violence_domestic} onChange={this.handleChangeFor}/><label htmlFor="violence_domestic">Domestic Violence</label>
            <br/>
            <input type="checkbox" name="violence_elder" value={this.state.violence_elder} onChange={this.handleChangeFor}/><label htmlFor="violence_elder">Elder Abuse</label>
            <br/>
            <input type="checkbox" name="violence_exposing" value={this.state.violence_exposing} onChange={this.handleChangeFor}/><label htmlFor="violence_exposing">Exposing</label>
            <br/>
            <input type="checkbox" name="violence_internet" value={this.state.violence_internet} onChange={this.handleChangeFor}/><label htmlFor="violence_internet">Internet Related</label>
            <br/>
            <input type="checkbox" name="violence_minor_by_family" value={this.state.violence_minor_by_family} onChange={this.handleChangeFor}/><label htmlFor="violence_minor_by_family">Minor/CSA - family</label>
            <br/>
            <input type="checkbox" name="violence_minor_by_other" value={this.state.violence_minor_by_other} onChange={this.handleChangeFor}/><label htmlFor="violence_minor_by_other">Minor/CSA - other</label>
            <br/>
            <input type="checkbox" name="violence_phone" value={this.state.violence_phone} onChange={this.handleChangeFor}/><label htmlFor="violence_phone">Obscene Phone Call</label>
            <br/>
            <input type="checkbox" name="violence_exploitation_trafficking" value={this.state.violence_exploitation_trafficking} onChange={this.handleChangeFor}/><label htmlFor="violence_exploitation_trafficking">Sexual exploitation/trafficking/prostitution</label>
            <br/>
            <input type="checkbox" name="violence_harassment" value={this.state.violence_harassment} onChange={this.handleChangeFor}/><label htmlFor="violence_harassment">Sexual Harassment</label>
            <br/>
            <input type="checkbox" name="violence_stalking" value={this.state.violence_stalking} onChange={this.handleChangeFor}/><label htmlFor="violence_stalking">Stalking</label>
            <br/>
            <input type="checkbox" name="violence_teen_dating" value={this.state.violence_teen_dating} onChange={this.handleChangeFor}/><label htmlFor="violence_teen_dating">Teen Dating</label>
            <br/>
            <input type="checkbox" name="violence_other" value={this.state.violence_other} onChange={this.handleChangeFor}/><label htmlFor="violence_other">Other</label>
            <br/>
            <label>specify:</label>
            <form>
            <input type="text" name="violence_other_specify" value={this.state.violence_other_specify} onChange={this.handleChangeFor}/>
            </form>
            <br/>
            <input type="checkbox" name="violence_unknown" value={this.state.violence_unknown} onChange={this.handleChangeFor}/><label htmlFor="violence_unknown">Unknown/pass/doesn't know</label>
            <br/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TypeOfViolence);