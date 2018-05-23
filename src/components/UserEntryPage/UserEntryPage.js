import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminToolsNav from '../Nav/AdminToolsNav/AdminToolsNav';

const mapStateToProps = state => ({
  state
})

class UserEntryPage extends Component {


  render(){
    return (
      <div>
        <AdminToolsNav />
        <h1>User Entry Page</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserEntryPage);