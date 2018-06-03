import React, { Component } from "react";
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Button, Card } from '@material-ui/core';

import PhoneServices from '../FormComponents/PhoneServices/PhoneServices';
import Support from '../FormComponents/Support/Support';
import Demographics from '../FormComponents/Demographics/Demographics';
import InPersonContactInfo from '../FormComponents/ContactInfo/InPersonContactInfo';
import InpersonServices from '../FormComponents/InPersonServices/InPersonServices';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';
import FormButton from '../FormComponents/FormButton/FormButton';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const mapStateToProps = state => ({
    user: state.user,
    state,
    form: state.updateFormReducer,
    userInput: state.userInput,
    updateFormAlertReducer: state.updateFormAlertReducer
});


class UpdateForm extends Component {
    state = {
        form: this.props.state.updateFormReducer,
        userInput: this.props.state.userInput

    }

    handleSubmit = () => {
        this.props.dispatch({
            type: 'UPDATE_FORM',
            payload: this.props.state.updateFormReducer
        })
        this.props.clearUserInput();
    }

    handleClose = (event, reason) => {
        this.props.dispatch({
            type: 'CLOSE_UPDATE_SNACKBAR',
            payload: { isOpen: false }
        })
    };

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }
    //  static getDerivedStateFromProps=(props, state)=>{
    //     if(props.state.updateFormReducer){
    //         return props.state.updateFormReducer;
    //     }else {
    //         return null;
    //     }    

    // }
    delete = () => {
        console.log('in delete', this.props.state.updateFormReducer.id)
        this.props.dispatch({
            type: 'DELETE_FORM',
            payload: this.props.state.updateFormReducer
        })
        this.props.clearUserInput();
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
            <Card style={{padding: '20px', margin: '10px', postion: 'fixed'}}>
                <div>
                    <div style={{ float: 'left', marginLeft: '20px' }}>
                        <Button variant="raised" style={{ backgroundColor: '#F44336', color: '#FFEBEE' }} onClick={this.delete}>Delete</Button>
                    </div>
                    <div style={{ float: 'right', marginRight: '20px' }}>
                        <FormButton text={"Save"} handleSubmit={this.handleSubmit} />
                    </div>
                </div>
            </Card>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.props.updateFormAlertReducer.isOpen}
                autoHideDuration={5000}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Update Successful</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </div>;
    }
}

export default connect(mapStateToProps)(UpdateForm);