import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
//Style
import { Paper, Typography, Card, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//ReportComponents
import AdminNav from '../Nav/AdminNav/AdminNav';
import CountyDate from '../ReportComponents/Date/CountyDate';
import HennepinResidents from '../ReportComponents/Total/HennepinResidents';
import NewVictimsCounty from '../ReportComponents//New/NewVictimsCounty';
import CountyVictimType from '../ReportComponents/CountyVictimType';
import Zipcode from '../ReportComponents/Zipcode';
import CountyAgeRange from '../ReportComponents/Age/CountyAgeRange';
import CountyGender from '../ReportComponents/Gender/CountyGender';
import CountyEthnicity from '../ReportComponents/Ethnicity/CountyEthnicity';
import CountyVictimization from '../ReportComponents/Victimization/CountyVicitimization';
import CountyLocationType from '../ReportComponents/CountyLocation';
import { teal, grey } from '@material-ui/core/colors';

const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});
// const style = {
//     titleCard: {
//       color: grey[50],
//       backgroundColor: teal[300],
//       padding: '20px',
//       margin: '10px',
//       color: 'white'
//     },
//     title: {
//       color: grey[50],
//     },
//     paper: {
//       padding: '10px',
//       backgroundColor: grey[300]
//     }
//   }
  const style = {
    title: {
        backgroundColor:  teal[300],
        textAlign: 'center',
        color: 'white', 
        padding: '10px',
        
        // position: 'abosolute',
    },
    paper:{
        backgroundColor: grey[300], 
        padding: '10px',
        margin: '10px',
        
        
    }
}
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

class CountyReport extends Component{ 
    constructor(){
        super();
        this.state={
            startDate:'',
            endDate:'',
            county:''
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
        this.props.dispatch({
            type: 'GET_PERSON_DATA_COUNTY', 
            payload: this.state
        })
    }
    print = () => {
        console.log('print button clicked');
        window.print();
    }

    componentDidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }

    render () {
      
        return (

           <div>
                <div style= {{ flex: .5, margin: "20px", marginLeft: "200px", textAlign: "center" }}>
                <AdminNav />
                    <Grid container direction="row" justify="absolute" alignItems="center" spacing={40}>
                        {/* <Grid item item xs={3} sm={3} md={3}>
                        </Grid>
                        <Grid item xs={8} sm={8} md={9} lg={9} xl={12}> */}
                            <Paper style={style.paper}>
                                <Card style={{ margin: "10px"}}>
                                    <Typography variant="display1" style={style.title}>
                                        County Report
                                    </Typography>
                                </Card>
                                <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <CountyDate />
                                    </Grid>
                                    </Card>
                                <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <HennepinResidents />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <NewVictimsCounty />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <CountyVictimType />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Zipcode />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <CountyLocationType />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <CountyAgeRange />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                    <h1> Direct Services</h1>
                                    </Card>
                                    <Card  style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <CountyGender />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <CountyEthnicity />
                                    </Grid>
                                    </Card>
                                    <Card style={{margin: "10px", padding: "20px" }}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <CountyVictimization />
                                    </Grid>
                                    </Card>
                            </Paper>
                            <Grid item xs={1} sm={1}>
                            </Grid>
                        {/* </Grid> */}
                    </Grid>
                </div>
            </div>
        
        )
    }
}
            
CountyReport.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(CountyReport));

 