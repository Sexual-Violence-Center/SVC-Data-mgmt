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
         form: this.props.state.updateFormReducer
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
        let content = null;
        if (this.props.user.userName) {
          content = (
// const UpdateForm = (form)=>{
            <p> this is a test </p>
            )
        }
        return(<div>
            {content}
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