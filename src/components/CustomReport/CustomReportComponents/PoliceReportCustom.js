import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class PoliceReportCustom extends Component {
    constructor() {
        super();
        this.state = {
            police_report: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            police_report: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Police Report Filed Report: </h4>
                <form value={this.state.police_report} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "police_report_filed_yes"
                            value = "police_report_filed_yes"
                        />
                        < label htmlFor = "police_report_filed_yes" >
                            Yes
                        </label>

                        <input type="checkbox" 
                            id = "police_report_filed_no"
                            value = "police_report_filed_no"
                        />
                        < label htmlFor = "police_report_filed_no" >
                            No
                        </label>

                        <input type="checkbox" 
                            id = "police_report_filed_unknown"
                            value = "police_report_filed_unknown"
                        />
                        < label htmlFor = "police_report_filed_unknown" >
                            Unknown
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(PoliceReportCustom)