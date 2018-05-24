import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history, withRouter } from 'react-router-dom';

// import Nav from '../../components/Nav/Nav';
// import AdminNav from '../Nav/AdminNav/AdminNav';
// import UserDataEntryNav from '../Nav/DataEntryNav/UserDataEntryNav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


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
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

let routerLogout = withRouter(Logout);

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(routerLogout);
