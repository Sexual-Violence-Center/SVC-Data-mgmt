import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import '../../styles/main.css'

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class customReportSelectionPage extends Component{
    state = {
        //tbd if needed
    }

    // componentDidMount() {
    //     //load custom report options on page load
    // }

    render(){

        return ( 
            <div >
                <Nav/>
                <h2> Custom Report Page </h2>
            </div>

        )// end return
    } //end render
} //end class customReportSelectionPage

export default connect(mapStateToProps)(customReportSelectionPage);