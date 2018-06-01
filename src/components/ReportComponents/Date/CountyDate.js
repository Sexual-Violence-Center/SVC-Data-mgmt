import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/AdminNav/AdminNav';
//Style
import { Paper, Typography, Card, Button } from '@material-ui/core';
import CalendarModal from "../../Modal/calendar.modal"


const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class CountyDate extends Component{ 
    constructor(){
        super();
        this.state={
            startDate:'',
            endDate:'',
            county:'',
            service_location: ''
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        }); 
       
    }
    submit = () => {
        console.log(this.state);
        if (this.state.startDate === '' || this.state.endDate === '') {
            console.log('no date', this.props.startDate);

            this.setState({
                isOpen: true
            });
        } else {
            this.props.dispatch({
                type: 'GET_PERSON_DATA_COUNTY', 
                payload: this.state
            })
        }
    }

    print = () => {
        console.log('print button clicked');
        window.print();
    }

    componentDidMount () {
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }

    closeModel = () => {
        this.setState({
            isOpen: false
        });
    }

    render () {
        return (
            <div className="federalReport">
            <AdminNav />
            <div>
            <h2>County Report:</h2>
                Start Date:
                <input type="date" name="startDate" value={this.state.startDate} onChange={this.handleChangeFor}/>
                End Date:
                <input type="date" name="endDate" value={this.state.endDate} onChange={this.handleChangeFor}/>
                County:
                <select name="county" value={this.state.county} onChange={this.handleChangeFor}>
                <option>Select One</option>
                <option value="Hennepin">Hennepin</option>
                <option value="Scott">Scott</option>
                <option value="Carver">Carver</option>
                <option value="Other">Other</option>
                </select>
                <button onClick={this.submit}>Submit</button>  
                <button onClick={this.print}>Print</button>
            </div>

            {this.state.isOpen === true && <CalendarModal
                handleClose={this.closeModel} />
            }
            </div>

        )
    }
}

export default connect(mapStateToProps)(CountyDate);