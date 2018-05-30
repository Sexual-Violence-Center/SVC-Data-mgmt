import React, { Component } from 'react';
import { connect } from 'react-redux';
import VictimAge from './SurveyComponents/VictimAge';
import Gender from './SurveyComponents/Gender';
import Transgender from './SurveyComponents/Transgender';
import Orientation from './SurveyComponents/Orientation';
import Pronouns from './SurveyComponents/Pronouns';

const mapStateToProps = state => ({
    state
});

class Survey extends Component {
    constructor(){
        super();
        this.state = {
            victim_age: undefined,
            victim_gender: '',
            victim_transgender: '',
            victim_gender_pronouns: '',
            victim_sexual_orientation: '',
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
                <h2>Demographics Survey</h2>
                <VictimAge handleChangeFor={this.handleChangeFor}/>
                <Gender handleChangeFor={this.handleChangeFor}/>
                <Transgender handleChangeFor={this.handleChangeFor}/>
                <Orientation handleChangeFor={this.handleChangeFor}/>
                <Pronouns handleChangeFor={this.handleChangeFor}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Survey);