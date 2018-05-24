import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Calendar from 'react-calendar'
// import Calendar from 'rc-calendar'
import ReportingNav from '../Nav/ReportingNav/ReportingNav';


const mapStateToProps = state => ({
    user: state.user,
    state
});

class CountyReport extends Component {
    render() {
        return (
            <div>
                <ReportingNav />
                <h2>County Reports</h2>
            </div>
        )
    }
}


export default connect(mapStateToProps)(CountyReport);