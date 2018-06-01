import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/AdminNav/AdminNav';
//Style
import {withStyles} from '@material-ui/core/styles';
import { Paper, Typography, Card, Button, Grid } from '@material-ui/core';
import CalendarModal from "../../Modal/calendar.modal"

// const styles = theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing.unit,
//         marginRight: theme.spacing.unit,
//         width: 200,
//     },
//     menu: {
//         width: 200,
//     },
//     formControl: {
//         margin: theme.spacing.unit,
//         minWidth: 120,
//     },
//     group: {
//         margin: `${theme.spacing.unit}px 0`,
//     },
// });

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
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={40}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
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
                </Grid>
                <button onClick={this.submit}>Submit</button>  
                <button onClick={this.print}>Print</button>
            </Grid>
            </div>

            {this.state.isOpen === true && <CalendarModal
                handleClose={this.closeModel} />
            }
            </div>

        )
    }
}

export default connect(mapStateToProps)(CountyDate);