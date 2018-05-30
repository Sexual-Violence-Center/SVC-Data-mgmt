import React, { Component } from "react";
import { connect } from "react-redux";
import AdminNav from "../Nav/AdminNav/AdminNav";
import "../../styles/main.css";

const mapStateToProps = state => ({
  user: state.user,
  state
});

class CustomReportOutput extends Component{
    render(){
        return(
            <div>
                this is a test
            </div>
        )
    }
}

export default connect(mapStateToProps)(CustomReportOutput);