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
    if(props.state.CustomReportReducer){
      return props.state.CustomReportReducer;
    }
    else {
      return null;
    }
      
  };

  shouldComponentUpdate(nextProps, nextState){
    console.log('should componenet update');
    if(nextProps.state.CustomReportReducer != null){
      return true
    }
    else {
      return null
    }
  }


  renderOutput = ()=>{

        let keys = Object.keys(this.state);
        let values = Object.values(this.state);

        let output = keys.map((key, index)=>{
        let keyNoUnderscores = key.replace(/_|-/g, " ");
          return(
            <p key={key}>{keyNoUnderscores} : {values[index]}</p>
          )
        })

    return (

      <div>{output}</div>
    )
  }

  render() {

    return <div>
        <AdminNav />
        <div style={{ flex: 1, margin: 'auto', textAlign: 'center' }}>
          <h2>Custom Report</h2>
          {this.renderOutput()}
        </div>
      </div>;
  }
}

export default connect(mapStateToProps)(CustomReportOutput);