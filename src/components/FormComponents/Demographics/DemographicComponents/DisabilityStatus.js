import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class DisabilityStatus extends Component {
    constructor(){
        super()
        this.state = {
            disability_blind: undefined,
            disability_physical: undefined,
            disability_mental: undefined,
            disability_deaf: undefined,
            disability_developmental: undefined,
            disability_none: undefined,
            disability_other: undefined,
            disability_other_specify: '',
            disability_unknown: undefined,  
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

    render() {
        return (
            <div>
                <h3>Disability Status</h3>
                <input type="checkbox" name="disability_blind" value={this.state.disability_blind} onChange={this.handleChangeFor}/><label htmlFor="disability_blind">Blind/Visually Impaired</label>
                <br />
                <input type="checkbox" name="disability_physical" value={this.state.disability_physical} onChange={this.handleChangeFor}/><label htmlFor="disability_physical">Physical Disabilities</label>
                <br />
                <input type="checkbox" name="disability_mental" value={this.state.disability_mental} onChange={this.handleChangeFor}/><label htmlFor="disability_mental">Mental Illness</label>
                <br />
                <input type="checkbox" name="disability_deaf" value={this.state.disability_deaf} onChange={this.handleChangeFor}/><label htmlFor="disability_deaf">Deaf/Hard of Hearing</label>
                <br />
                <input type="checkbox" name="disability_developmental" value={this.state.disability_developmental} onChange={this.handleChangeFor}/><label htmlFor="disability_developmental">Intellectual or Developmental Disabilities</label>
                <br />
                <input type="checkbox" name="disability_none" value={this.state.disability_none} onChange={this.handleChangeFor}/><label htmlFor="disability_none">None</label>
                <br />
                <input type="checkbox" name="disability_other" value={this.state.disability_other} onChange={this.handleChangeFor}/><label htmlFor="disability_other">Other</label>
                <br />
                <label htmlFor="disability_other_specify">specify</label>
                <input type="text" name="disability_other_specify"  value={this.state.disability_other_specify} onChange={this.handleChangeFor}/>
                <br />
                <input type="checkbox" name="disability_unknown" value={this.state.disability_unknown} onChange={this.handleChangeFor}/><label htmlFor="disability_unknown">Unknown</label>
                <br />
            </div>
        )
    }
}

export default connect(mapStateToProps)(DisabilityStatus);