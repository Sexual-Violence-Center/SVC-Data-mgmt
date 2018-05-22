import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class EthnicBackground extends Component {
    constructor(){
        super();
        this.state = {
            victim_ethnicity: '',
            victim_ethnicity_other_specify: '',
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        this.props.dispatch({
            type: 'ENTRY_FORM_DATA', 
            payload: {...this.state, [name]: value }
        })
    }

    render() {
        return (
            <div>
                <h3>Ethnic Background</h3>
                <select name="victim_ethnicity" value={this.state.victim_ethnicity} onChange={this.handleChangeFor}>
                    <option>Select One</option>
                    <option value="asian">Asian</option>
                    <option value="african american/black">African American/Black</option>
                    <option value="hispanic/latino">chican@/latin@</option>
                    <option value="multi-racial">Multi-racial</option>
                    <option value="amerIndAlaskaNative">Native American</option>
                    <option value="native hawaiian/pacific islander">Native Hawaiian/Pacific Islander</option>
                    <option value="white non-latino/caucasian">White Non-Latino/Caucasian</option>
                    <option value="other">Other</option>
                    <option value="unknown/pass">Unknown/Pass</option>
                </select>
                <label>
                    If Other, please specify
                </label>
                <input type="text" name="victim_ethnicity_other_specify" value={this.state.victim_ethnicity_other_specify} onChange={this.handleChangeFor}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(EthnicBackground);