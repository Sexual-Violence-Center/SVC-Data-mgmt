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
                <Blind handleChangeFor={this.handleChangeFor}/>
                <Physical handleChangeFor={this.handleChangeFor}/>
                <Mental handleChangeFor={this.handleChangeFor}/>
                <Deaf handleChangeFor={this.handleChangeFor}/>
                <Intellectual handleChangeFor={this.handleChangeFor}/>
                <None handleChangeFor={this.handleChangeFor}/>
                <Other handleChangeFor={this.handleChangeFor}/>
                <Unknown handleChangeFor={this.handleChangeFor}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DisabilityStatus);