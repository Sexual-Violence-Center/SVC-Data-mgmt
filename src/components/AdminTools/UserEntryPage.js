import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
})

class UserEntryPage extends Component {


  render(){
    return (
      <div>
        <h1>User Entry Page</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserEntryPage);