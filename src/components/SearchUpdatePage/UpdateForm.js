import React, {Component} from "react";
import { connect } from 'react-redux';

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

     handleSubmit = () =>{
         this.props.dispatch({
             type: 'UPDATE_FORM',
             payload: this.state
         })
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
         
         
        // return(<div>
        //     <div>
        //      <button onClick={this.delete}>Delete</button>
        //      </div>
        //     <InPersonContactInfo />
        //     <InpersonServices />
        //     <PhoneServices />
        //     <Support />
        //     <UnmetNeeds />
        //     <Referrals />
        //     <Demographics />
        //     </div>)

        return <div>
            <div>
             <button onClick={this.delete}>Delete</button>
             </div>
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