import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class Survey extends Component {
    constructor(){
        super();
        this.state = {
            victim_age: '',
            victim_gender: '',
            victim_transgender: '',
            victim_gender_pronouns: '',
            victim_sexual_orientation: '',
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
                <h2>Demographics Survey</h2>
                <label htmlFor="victim_age">Age:</label>
                <input type="number" name="victim_age" value={this.state.victim_age} onChange={this.handleChangeFor}/>
                <label htmlFor="victim_gender">Gender:</label>
                <input type="text" name="victim_gender" value={this.state.victim_gender} onChange={this.handleChangeFor}/>
                <label htmlFor="victim_transgender">Transgender:</label>
                <select name="victim_transgender" value={this.state.victim_transgender} onChange={this.handleChangeFor}>
                    <option>Select One</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    <option value="unknown">unknown/pass</option>
                </select>
                <br/>
                <label htmlFor="victim_sexual_orientation">Sexual Orientation</label>
                <input type="text" name="victim_sexual_orientation" value={this.state.victim_sexual_orientation} onChange={this.handleChangeFor}/>
                <label htmlFor="victim_gender_pronouns">Gender Pronouns</label>
                <input type="text" name="victim_gender_pronouns" value={this.state.victim_gender_pronouns} onChange={this.handleChangeFor}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Survey);