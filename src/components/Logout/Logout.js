import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { triggerLogout } from '../../redux/actions/loginActions';
import {Button} from '@material-ui/core';


const mapStateToProps = state => ({
  state
});

class Logout extends Component {


  componentDidUpdate() {
    if (!this.props.state.user.isLoading && this.props.state.user.userName === null) {
      this.props.history.push('/login');
    }
  }
  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <Button style={{color: 'white'}} onClick={this.logout}>Logout</Button>
      </div>
    );
  }
}

let routerLogout = withRouter(Logout);

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(routerLogout);
