import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdultSexualAssault from './TypeOfViolenceComponents/AdultSexualAssault';
import AbusedChildFamily from './TypeOfViolenceComponents/AbusedChildFamily';
import AbusedChildOther from './TypeOfViolenceComponents/AbusedChildOther';
import Bullying from './TypeOfViolenceComponents/Bullying';
import ChildPornography from './TypeOfViolenceComponents/ChildPornography';
import DomesticViolence from './TypeOfViolenceComponents/DomesticViolence';
import ElderAbuse from './TypeOfViolenceComponents/ElderAbuse';
import Exposing from './TypeOfViolenceComponents/Exposing';
import InternetRelated from './TypeOfViolenceComponents/InternetRelated';
import MinorCSAFamily from './TypeOfViolenceComponents/MinorCSAFamily';
import MinorCSAOther from './TypeOfViolenceComponents/MinorCSAOther';
import ObsceneCall from './TypeOfViolenceComponents/ObsceneCall';
import Exploitation from './TypeOfViolenceComponents/Exploitation';
import Harassment from './TypeOfViolenceComponents/Harassment';
import Stalking from './TypeOfViolenceComponents/Stalking';
import TeenDating from './TypeOfViolenceComponents/TeenDating';
import OtherViolence from './TypeOfViolenceComponents/OtherViolence';
import UnknownViolence from './TypeOfViolenceComponents/UnknownViolence';

const mapStateToProps = state => ({
    state
});

const initialState = {
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
  violence_other_specify: "",
  violence_unknown: undefined
};

class TypeOfViolence extends Component {
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
        <h3>Type of Sexual Violence</h3>
        <AdultSexualAssault handleChangeFor={this.handleChangeFor} />
        <AbusedChildFamily handleChangeFor={this.handleChangeFor} />
        <AbusedChildOther handleChangeFor={this.handleChangeFor} />
        <Bullying handleChangeFor={this.handleChangeFor} />
        <ChildPornography handleChangeFor={this.handleChangeFor} />
        <DomesticViolence handleChangeFor={this.handleChangeFor} />
        <ElderAbuse handleChangeFor={this.handleChangeFor} />
        <Exposing handleChangeFor={this.handleChangeFor} />
        <InternetRelated handleChangeFor={this.handleChangeFor} />
        <MinorCSAFamily handleChangeFor={this.handleChangeFor} />
        <MinorCSAOther handleChangeFor={this.handleChangeFor} />
        <ObsceneCall handleChangeFor={this.handleChangeFor} />
        <Exploitation handleChangeFor={this.handleChangeFor} />
        <Harassment handleChangeFor={this.handleChangeFor} />
        <Stalking handleChangeFor={this.handleChangeFor} />
        <TeenDating handleChangeFor={this.handleChangeFor} />
        <OtherViolence handleChangeFor={this.handleChangeFor} />
        <UnknownViolence handleChangeFor={this.handleChangeFor} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(TypeOfViolence);