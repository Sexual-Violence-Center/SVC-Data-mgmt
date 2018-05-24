import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Nav from '../../components/Nav/Nav';
import AdminNav from '../Nav/AdminNav/AdminNav';
import UserDataEntryNav from '../Nav/DataEntryNav/UserDataEntryNav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  state
});

class BannerAndLogout extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

//   componentDidUpdate() {
//     if (!this.props.user.isLoading && this.props.user.userName === null) {
//       this.props.history.push('/home');
//     } else if (!this.props.user.isLoading && this.props.user.userName === true) {
//         this.props.history.push('/adminlandingpage');
//     } else if (!this.props.user.isLoading && this.props.user.userName === false) {
//         this.props.history.push('/userlandingpage');
//     }
//   }
componentDidUpdate() {
    if (!this.props.state.user.isLoading && this.props.state.user.userName === null) {
      this.props.dispatch({type:'/login'});
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.dispatch({type:'/login'});
  }

  render() {
    let content = null;

    if (this.props.state.user.userName === true) {
      content = (
        <div>
            <AdminNav />
          <h1
            id="welcome"
          >
            Working as, Admin
          </h1>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    } else if (this.props.state.user.userName === false) {
        content = (
          <div>
              <UserDataEntryNav />
            <h1
              id="welcome"
            >
              Working as, Volunteer
            </h1>
            <button
              onClick={this.logout}
            >
              Log Out
            </button>
          </div>
        );
      }

    return (
      <div>
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(BannerAndLogout);
