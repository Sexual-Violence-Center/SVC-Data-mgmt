import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AdminNav from '../Nav/AdminNav/AdminNav';
//Style
import { Paper, Typography, Card, Button } from '@material-ui/core';
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
            <div style={{  float: "right", marginRight: "350px" 
              
                //   position: 'absolute',
                //   top: `${top}%`,
                //   left: `${left}%`,
                //   transform: `translate(-${top}%, -${left}%)`,
                
              }}>
            <Paper style={style.paper}>
              <Card style={{ margin: "10px"}}>
                <Typography variant="display1" style={style.title}>
                Federal Report
                </Typography>
              </Card>
            <FederalDate />
            <FederalTotalVictims />
            <NewVictimsFederal />
            <FederalEthnicity />
            <FederalGender />
            <FederalAgeRange />
            <FederalVictimization />
            <SpecialClassification />
            <h1> Direct Services</h1>
            <CompensationApplication />
            <InformationReferral />
            <AdvocacyAccompaniment />
            <EmotionalSupport />
            <CriminalCivilJusticeSystemAssistance />
            </Paper>
            </div>
        );
    }    
}
export default connect(mapStateToProps)(FederalReport);