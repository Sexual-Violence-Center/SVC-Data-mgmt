import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class ImmigrantStatus extends Component {
    constructor(){
        super();
        this.state = {
            victim_immigrant: '',
            victim_immigrant_other_specify: '',
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
                <h3>Immigrant Status</h3>
                <select name="victim_immigrant" value={this.state.victim_immigrant} onChange={this.handleChangeFor}>
                    <option>Select One</option>
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
                <input type="text" name="victim_immigrant_other_specify" value={this.state.victim_immigrant_other_specify} onChange={this.handleChangeFor}/>
                </label>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ImmigrantStatus);