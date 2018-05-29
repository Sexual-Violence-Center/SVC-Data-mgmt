import React, {Component} from "react";
import { connect } from 'react-redux';

import PhoneServices from '../FormComponents/PhoneServices/PhoneServices';
import Support from '../FormComponents/Support/Support';
import Demographics from '../FormComponents/Demographics/Demographics';
import InPersonContactInfo from '../FormComponents/ContactInfo/InPersonContactInfo';
import InpersonServices from '../FormComponents/InPersonServices/InPersonServices';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';

const mapStateToProps = state => ({
    user: state.user,
    state,
    form: state.updateFormReducer,
    userInput: state.userInput
});

// this.setState({
//     : state.updateFormReducer
//   });


 class UpdateForm extends Component{
     state={
         form: this.props.state.updateFormReducer,
         userInput: this.props.state.userInput
     }


     static getDerivedStateFromProps=(props, state)=>{
        if(props.state.updateFormReducer){
            return props.state.updateFormReducer;
        }else {
            return null;
        }    
        
    }
    delete = () => {
        console.log('in delete', this.props.state.updateFormReducer.id )
        this.props.dispatch({
            type: 'DELETE_FORM',
            payload: this.props.state.updateFormReducer
        })
    }
     render() {
         
         
        return(<div>
            <div>
             <button onClick={this.delete}>Delete</button>
             </div>
            <InPersonContactInfo />
            <InpersonServices />
            <PhoneServices />
            <Support />
            <UnmetNeeds />
            <Referrals />
            <Demographics />
            </div>)
    }
}

export default connect(mapStateToProps)(UpdateForm);