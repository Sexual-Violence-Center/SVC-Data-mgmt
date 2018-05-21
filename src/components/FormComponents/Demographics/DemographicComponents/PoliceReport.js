import React, { Component } from 'react';

class PoliceReport extends Component {
    render() {
        return (
            <div>
                <h3>Was a police report filed?</h3>
                <select name="policeReport">
                    <option value="police_report_filed">yes</option>
                    <option value="police_report_filed">no</option>
                    <option value="police_report_filed">unknown</option>
                </select>
            </div>
        )
    }
}

export default PoliceReport;