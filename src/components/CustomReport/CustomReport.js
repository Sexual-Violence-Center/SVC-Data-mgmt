import React, { Component } from 'react';
import ReportingNav from '../Nav/ReportingNav/ReportingNav';


class CustomReport extends Component {
    render(){
        return(
            <div>
                <ReportingNav />
                <h1>Custom Reporting</h1>
            </div>
        )
    }
}

export default CustomReport;