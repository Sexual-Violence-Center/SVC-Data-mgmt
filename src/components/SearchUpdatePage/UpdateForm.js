import React, {Component} from "react";
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import PhoneServices from '../FormComponents/PhoneServices/PhoneServices';
import Support from '../FormComponents/Support/Support';
import Demographics from '../FormComponents/Demographics/Demographics';
import InPersonContactInfo from '../FormComponents/ContactInfo/InPersonContactInfo';
import InpersonServices from '../FormComponents/InPersonServices/InPersonServices';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';
import FormButton from '../FormComponents/FormButton/FormButton';

const mapStateToProps = state => ({
    user: state.user,
    state,
    form: state.updateFormReducer,
});

// this.setState({
//     : state.updateFormReducer
//   });


 class UpdateForm extends Component{
     state={

     }

     handleSubmit = () =>{
         this.props.dispatch({
             type: 'UPDATE_FORM',
             payload: this.state
         })
     }

     componentDidMount(){
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
     }
     static getDerivedStateFromProps=(props, state)=>{
        if(props.state.updateFormReducer){
            return props.state.updateFormReducer;
        }else {
            return null;
        }    
        
    }
     render() {

        return <div>
            <InPersonContactInfo dispatchTo={"UPDATE_THE_FORM"} />
            <InpersonServices dispatchTo={"UPDATE_THE_FORM"} />
            <PhoneServices dispatchTo={"UPDATE_THE_FORM"} />
            <Support dispatchTo={"UPDATE_THE_FORM"} />
            <UnmetNeeds dispatchTo={"UPDATE_THE_FORM"} />
            <Referrals dispatchTo={"UPDATE_THE_FORM"} />
            <Demographics dispatchTo={"UPDATE_THE_FORM"} />
            <FormButton text={"Save"} handleSubmit={this.handleSubmit} />
          </div>;
    }
}

export default connect(mapStateToProps)(UpdateForm);