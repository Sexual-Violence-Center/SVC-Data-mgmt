import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Calendar from 'react-calendar'
// import Calendar from 'rc-calendar'
// import Nav from '../../components/Nav/Nav';


const mapStateToProps = state => ({
    user: state.user,
    state
  });

  class CountyReport extends Component {
      render(){
          return(
              <h2>County Reports</h2>


          )
      }
  }


export default connect(mapStateToProps)(CountyReport);