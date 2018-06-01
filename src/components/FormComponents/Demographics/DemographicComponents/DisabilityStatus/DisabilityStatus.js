import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blind from './DisabilityComponents/Blind';
import Physical from './DisabilityComponents/Physical';
import Mental from './DisabilityComponents/Mental';
import Deaf from './DisabilityComponents/Deaf';
import Intellectual from './DisabilityComponents/Intellectual';
import None from './DisabilityComponents/None';
import Other from './DisabilityComponents/Other';
import Unknown from './DisabilityComponents/Unknown';

const mapStateToProps = state => ({
    state
});

const initialState = {
      disability_blind: false,
      disability_physical: false,
      disability_mental: false,
      disability_deaf: false,
      disability_developmental: false,
      disability_none: false,
      disability_other: false,
      disability_other_specify: "",
      disability_unknown: false
    };

class DisabilityStatus extends Component {
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
    return <div>
        <h3>Disability Status</h3>
        <Blind handleChangeFor={this.handleChangeFor} disability_blind ={this.state.disability_blind}/>
        <Physical handleChangeFor={this.handleChangeFor} disability_physical={this.state.disability_physical}/>
        <Mental handleChangeFor={this.handleChangeFor} disability_mental={this.state.disability_mental}/>
        <Deaf handleChangeFor={this.handleChangeFor} disability_deaf={this.state.disability_deaf}/>
        <Intellectual handleChangeFor={this.handleChangeFor} disability_developmental={this.state.disability_developmental}/>
        <None handleChangeFor={this.handleChangeFor} disability_none={this.state.disability_none}/>
        <Other handleChangeFor={this.handleChangeFor} disability_other={this.state.disability_other} disability_other_specify={this.state.disability_other_specify}/>
        <Unknown handleChangeFor={this.handleChangeFor} disability_unknown={this.state.disability_unknown}/>
      </div>;
  }
}

export default connect(mapStateToProps)(DisabilityStatus);