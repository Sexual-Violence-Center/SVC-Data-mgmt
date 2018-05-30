import React, { Component } from "react";
import { connect } from "react-redux";
import AdminNav from "../Nav/AdminNav/AdminNav";
import "../../styles/main.css";

const mapStateToProps = state => ({
  user: state.user,
  state
});

class CustomReportOutput extends Component {
  state = {};
  static getDerivedStateFromProps = (props, state) => {
      console.log(props);
      return null;
  };
  render() {
    return (
      <div>
        <AdminNav />
        this is a test
      </div>
    );
  }
}

export default connect(mapStateToProps)(CustomReportOutput);