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
  violence_adult_sexual: false,
  violence_adult_when_child_by_family: false,
  violence_adult_when_child_by_other: false,
  violence_bullying: false,
  violence_child_pornography: false,
  violence_domestic: false,
  violence_elder: false,
  violence_exposing: false,
  violence_internet: false,
  violence_minor_by_family: false,
  violence_minor_by_other: false,
  violence_phone: false,
  violence_exploitation_trafficking: false,
  violence_harassment: false,
  violence_stalking: false,
  violence_teen_dating: false,
  violence_other: false,
  violence_other_specify: "",
  violence_unknown: false
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
    return <div>
        <h3>Type of Sexual Violence</h3>
        <AdultSexualAssault handleChangeFor={this.handleChangeFor} violence_adult_sexual={this.state.violence_adult_sexual} />
        <AbusedChildFamily handleChangeFor={this.handleChangeFor} violence_adult_when_child_by_family={this.state.violence_adult_when_child_by_family} />
        <AbusedChildOther handleChangeFor={this.handleChangeFor} violence_adult_when_child_by_other={this.state.violence_adult_when_child_by_other} />
        <Bullying handleChangeFor={this.handleChangeFor} violence_bullying={this.state.violence_bullying} />
        <ChildPornography handleChangeFor={this.handleChangeFor} violence_child_pornography={this.state.violence_child_pornography} />
        <DomesticViolence handleChangeFor={this.handleChangeFor} violence_domestic={this.state.violence_domestic} />
        <ElderAbuse handleChangeFor={this.handleChangeFor} violence_elder={this.state.violence_elder} />
        <Exposing handleChangeFor={this.handleChangeFor} violence_exposing={this.state.violence_exposing} />
        <InternetRelated handleChangeFor={this.handleChangeFor} violence_internet={this.state.violence_internet} />
        <MinorCSAFamily handleChangeFor={this.handleChangeFor} violence_minor_by_family={this.state.violence_minor_by_family} />
        <MinorCSAOther handleChangeFor={this.handleChangeFor} violence_minor_by_other={this.state.violence_minor_by_other} />
        <ObsceneCall handleChangeFor={this.handleChangeFor} violence_phone={this.state.violence_phone} />
        <Exploitation handleChangeFor={this.handleChangeFor} violence_exploitation_trafficking={this.state.violence_exploitation_trafficking} />
        <Harassment handleChangeFor={this.handleChangeFor} violence_harassment={this.state.violence_harassment} />
        <Stalking handleChangeFor={this.handleChangeFor} violence_stalking={this.state.violence_stalking} />
        <TeenDating handleChangeFor={this.handleChangeFor} violence_teen_dating={this.state.violence_teen_dating} />
        <OtherViolence handleChangeFor={this.handleChangeFor} violence_other={this.state.violence_other} violence_other_specify={this.state.violence_other_specify} />
        <UnknownViolence handleChangeFor={this.handleChangeFor} violence_unknown={this.state.violence_unknown} />
      </div>;
  }
}

export default connect(mapStateToProps)(TypeOfViolence);