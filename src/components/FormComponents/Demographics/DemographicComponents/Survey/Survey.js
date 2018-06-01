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

const initialState = {
      victim_age: "",
      victim_gender: "",
      victim_transgender: "",
      victim_gender_pronouns: "",
      victim_sexual_orientation: ""
    };
class Survey extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  static getDerivedStateFromProps = (props, state) => {
    if (props.dispatchTo === "UPDATE_THE_FORM") {
      const { updateFormReducer } = props.state;
      Object.keys(updateFormReducer).forEach(key => {
        if (updateFormReducer[key] === null) {
          updateFormReducer[key] = undefined;
        }
        return null;
      });
      return updateFormReducer;
    } else if (!props.state.EntryFormReducer) {
      return initialState;
    } else {
      return state;
    }
  };

  handleChangeFor = event => {
    const target = event.target;
    const value =
      target.type === "checkbox"
        ? target.checked
        : target.type === "radio"
          ? target.checked
          : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.props.dispatch({
      type: this.props.dispatchTo,
      payload: { ...this.state, [name]: value }
    });
  };

  render() {
    return (
      <div>
        <h2>Demographics Survey</h2>
        <VictimAge handleChangeFor={this.handleChangeFor} victim_age={this.state.victim_age}/>
        <Gender handleChangeFor={this.handleChangeFor} victim_gender={this.state.victim_gender}/>
        <Transgender handleChangeFor={this.handleChangeFor} victim_transgender={this.state.victim_transgender}/>
        <Orientation handleChangeFor={this.handleChangeFor} victim_sexual_orientation = {this.state.victim_sexual_orientation}/>
        <Pronouns handleChangeFor={this.handleChangeFor} victim_gender_pronouns={this.state.victim_gender_pronouns}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Survey);