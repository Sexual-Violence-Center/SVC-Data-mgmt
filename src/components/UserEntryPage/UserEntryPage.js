import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AdminNav from '../Nav/AdminNav/AdminNav';
import UserEntryPageList from './UserEntryPageList';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import { Paper, Typography, Card, Grid, Table, TableBody, TableCell, TableHead, TableRow, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({
  user: state.user,
  state,
});

const CustomTableCell = withStyles(theme => ({
  body: {
    fontSize: 15,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const style = {
  title: {
      backgroundColor: '#FFF9C4',
      textAlign: 'center',
      color: '#616161',
      padding: '10px',
  },
  paper: {
      backgroundColor: '#FFFDE7',
      padding: '10px'
  }
}

class UserEntryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      user_type: false,
      message: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
      this.props.dispatch({
        type: 'GET_USERS_SAGA'    
    });
   }
  
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('login');
    };
  }

  registerUser = (event) => {
    event.preventDefault();
    console.log("clicked add new user submit button");
    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const config = {
        headers: new Headers({ 'Content-Type': 'application/json' }),
        withCredentials: true,
       }
       const body = {
          username: this.state.username,
          password: this.state.password,
          user_type: this.state.user_type,
        }
        axios.post ('/api/user/register/new', body, config)
        .then((response) => {
          if (response.status === 201) {
            alert("You successfully added the new user!");
            this.props.dispatch({
              type: 'GET_USERS_SAGA'   
          });
          this.setState({
            username: '',
            password: '',
            user_type: false,
            message: '',
          })
          } else {
            this.setState({
              message: 'That username might be in use already. Please try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Something went wrong... It may be you are not logged in with an Admin account or that the server on Heroku is being restarted. If you are sure about your account, please wait a few minutes for Heroku and try again.',
          });
        });
      }
    }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    })
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {

    const { classes } = this.props;

    const userEntryPageList = this.props.state.getUsersReducer.map((user) => {
      return (<UserEntryPageList key={user.id} user={user}/>)
    })

    let content = null;

    //TODO: update this if statement to be true when the logged-in user is user_type === true
    if(this.props.user) {
      content = (
    <div>
      <div style={{}}>
        <AdminNav />
        <Grid container direction="row" justify="space-between" alignItems="center" spacing={40}>
          <Grid item xs={6} sm={3}></Grid>
          <Grid item xs={6} sm={8}>
            <Paper style={style.paper}>
              <Card style={{margin: "10px"}}>
                <Typography variant="display1"
                style={style.title}>
                User Entry Page
                </Typography>
              </Card>
            {this.renderAlert()}
              <Card style={{margin: "10px", padding: "20px"}}>
                <h3>Add a new user:</h3>
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                  <br />
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                  <br />
                  <label>
                    User type:
                  </label>
                  <form
                  value={this.state.user_type}
                        onChange={this.handleInputChangeFor('user_type')}>
                    <input
                      type="radio"
                      id="user_type_admin"
                      name="user_type"
                      value={true}/>
                      <label htmlFor="user_type_admin">Admin</label>
                      <input
                      type="radio"
                      id="user_type_standard"
                      name="user_type"
                      value={false}/>
                      <label htmlFor="user_type_standard">Standard</label>
                    <div>
                      <Button
                        name="submit"
                        variant="flat"
                        color="primary"
                        onClick={this.registerUser}
                      >
                      Submit</Button>
                    </div>
                </form>
              </Card>
              <Card style={{margin: "10px", padding: "20px"}}>
                <div>
                  <h4>Current users:</h4>
                </div>
                <div>
                <Table className={classes.root}>
                  <TableBody className={classes.table}>

                     { userEntryPageList }
                
                  </TableBody>
                </Table>
              </div>
            </Card>
            </Paper>
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
      </div>
    </div>
    );
  }
  
    return (
    
    <div>

     {content}

    </div>
    )
  }
}

UserEntryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(UserEntryPage));