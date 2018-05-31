import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/AdminNav/AdminNav';
//Style
import { Card, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

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

    componentDidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }
    
    render () {
        return (
            <div className="federalReport">
            <AdminNav />
            <div>
            <h2>County Report:</h2>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={0}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    Start Date:
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <input type="date" name="startDate" value={this.state.startDate} onChange={this.handleChangeFor}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    End Date:
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <input type="date" name="endDate" value={this.state.endDate} onChange={this.handleChangeFor}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    County:
                </Grid>
                
                    <select name="county" value={this.state.county} onChange={this.handleChangeFor}>
                
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <option>Select One</option>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <option value="Hennepin">Hennepin</option>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <option value="Scott">Scott</option>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <option value="Carver">Carver</option>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <option value="Other">Other</option>
                </Grid>
                </select>
                <button onClick={this.submit}>Submit</button>  
                <button onClick={this.print}>Print</button>
            </Grid>
            </div>
            </div>

        )
    }
}
export default connect(mapStateToProps)(CountyDate);