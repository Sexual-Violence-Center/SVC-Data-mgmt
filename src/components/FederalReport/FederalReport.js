import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AdminNav from '../Nav/AdminNav/AdminNav';
//Style
import { Paper, Typography, Card, Button, Grid } from '@material-ui/core';
//ReportComponents
import FederalDate from '../ReportComponents/Date/FederalDate';
import FederalTotalVictims from '../ReportComponents/Total/FederalTotalVictims';
import NewVictims from '../ReportComponents/New/NewVictimsFederal';
import FederalEthnicity from '../ReportComponents/Ethnicity/FederalEthnicity';
import FederalGender from '../ReportComponents/Gender/FederalGender';
import FederalAgeRange from '../ReportComponents/Age/FederalAgeRange';
import FederalVictimization from '../ReportComponents/Victimization/FederalVictimization';
import SpecialClassification from '../ReportComponents/SpecialClassification';
import CompensationApplication from '../ReportComponents/CompensationApplication';
import InformationReferral from '../ReportComponents/InformationReferral(A)';
import AdvocacyAccompaniment from '../ReportComponents/AdvocacyAccompaniment/AdvocacyAccompaniment(B)';
import EmotionalSupport from '../ReportComponents/EmotionalSupport(C)';
import CriminalCivilJusticeSystemAssistance from '../ReportComponents/CriminalCivilJusticeSystemAssistance(E)';
import NewVictimsFederal from '../ReportComponents/New/NewVictimsFederal';
// import FederalDate from './ReportComponents/FederalDate';
// const top = 50;
// const left = 50;
 
const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});
const style = {
    title: {
        backgroundColor: '#00acb0',
        textAlign: 'center',
        color: 'white', 
        padding: '10px',
        
        // position: 'abosolute',
    },
    paper:{
        backgroundColor: 'lightgray', 
        padding: '10px',
        // margin: '50px',
        
    }
}

class FederalReport extends Component {
    constructor() {
        super();
        this.state = {
            startDate: '',
            endDate: '',
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
            type: 'GET_PERSON_DATA',
            payload: this.state
        })
    }
    
    print = () => {
        console.log('print button clicked');
        window.print();
    }

    componentDidMount() {

        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        console.log(this.props.state.getPersonReducer)
    }
   

    render() {
        return (
            <div>
            <div style={{  float: "right", marginRight: "40px"}}>
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={24}>
                <Grid item item xs={6} sm={3} md={3}>
                </Grid>
                <Grid item xs={6} sm={8} md={8}>
                    <Paper style={style.paper}>
                        <Card style={{ margin: "10px"}}>
                            <Typography variant="display1" style={style.title}>
                                Federal Report
                            </Typography>
                        </Card>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <FederalDate />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FederalTotalVictims />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <NewVictimsFederal />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FederalEthnicity />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FederalGender />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FederalAgeRange />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FederalVictimization />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <SpecialClassification />
                            </Grid>
                            <h1> Direct Services</h1>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <CompensationApplication />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <InformationReferral />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <AdvocacyAccompaniment />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <EmotionalSupport />
                            </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <CriminalCivilJusticeSystemAssistance />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div> 
        </div>
        );
    }    
}
export default connect(mapStateToProps)(FederalReport);