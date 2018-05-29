import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import InPersonContactInfo from '../FormComponents/ContactInfo/InPersonContactInfo';
import InpersonServices from '../FormComponents/InPersonServices/InPersonServices';
import UnmetNeeds from '../FormComponents/UnmetNeeds/UnmetNeeds';
import Referrals from '../FormComponents/Referrals/Referrals';
import Demographics from '../FormComponents/Demographics/Demographics';
import UserNav from '../Nav/UserNav/UserNav';
import AdminNav from '../Nav/AdminNav/AdminNav';
import SubmitButton from '../FormComponents/SubmitButton/SubmitButton';

import { Paper, Typography, Card, Button } from '@material-ui/core';

const mapStateToProps = state => ({
    state: state.user,
    state
})

const style = {
    title: {
        backgroundColor: '#FFF9C4',
        textAlign: 'center',
        color: '#616161', 
        padding: '10px',
    },
    paper:{
        backgroundColor: '#FFFDE7', 
        padding: '10px'
    }
}

class YellowForm extends Component {
    constructor() {
        super()
        this.state = {
            contact_type: 'in-person'
        }
    }

    componentDidMount(){
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    }

    handleSubmit = () => {
        console.log(this.props.state.EntryFormReducer);
        this.props.dispatch({
            type: 'ADD_NEW_VICTIM',
            payload: { ...this.state, ...this.props.state.EntryFormReducer }
        })
    }

    render() {
        let DataEntryNav;
        if (this.props.state.user.userInfo === true) {
            DataEntryNav = <AdminNav />
        } else if (this.props.state.user.userInfo === false) {
            DataEntryNav = <UserNav />
        }
        return (
            <div style={{ float: "right", marginRight: '80px' }}>
                {DataEntryNav}
                <Paper style={style.paper}>
                    <Card style={{margin: '10px'}}>
                        <Typography variant="display1" style={style.title}>
                            In-Person Contact Form for Primary AND Secondary Victims
                        </Typography>
                    </Card>
                    <InPersonContactInfo />
                    <InpersonServices />
                    <UnmetNeeds />
                    <Referrals />
                    <Demographics />
                    <SubmitButton handleSubmit={this.handleSubmit}/>
                </Paper>
            </div>
        )
    }
}

export default connect(mapStateToProps)(YellowForm);