import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Toolbar, AppBar, Paper, Card, TextField, Button } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

const styles = theme => ({
  card: {
    padding: '20px',
    margin: '10px'
  },
  titleCard: {
    color: grey[50],
    backgroundColor: teal[300],
    padding: '20px',
    margin: '10px'
  },
  paper: {
    padding: '10px',
    backgroundColor: grey[300]
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userInfo === true) {
      this.props.history.push('/adminlandingpage');
    } else if (nextProps.user.userInfo === false) {
      this.props.history.push('/userlandingpage');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Header />
            <Typography variant="display1" color="inherit" style={{ paddingLeft: '20px', color: '#FAFAFA' }}>
              Data Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: '100px' }}>
          {this.renderAlert()}
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item sm={4}></Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <div>
                  {/* <form className="loginForm" onSubmit={this.login}> */}
                    <Card className={classes.titleCard}>
                      <Typography variant="display1" style={{ textAlign: 'center', color: grey[50] }}>Login</Typography>
                    </Card>
                    <Card className={classes.card}>
                      <div>
                        <TextField
                          name="username"
                          label="Username"
                          className={classes.textField}
                          type="text"
                          margin="normal"
                          value={this.state.username}
                          onChange={this.handleInputChangeFor('username')}
                        />
                        {/* <label htmlFor="username">
                          Username:
                      <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChangeFor('username')}
                          />
                        </label> */}
                      </div>
                      <div>
                      <TextField
                          name="password"
                          label="Password"
                          className={classes.textField}
                          type="password"
                          margin="normal"
                          value={this.state.password}
                          onChange={this.handleInputChangeFor('password')}
                        />
                        {/* <label htmlFor="password">
                          Password:
                      <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChangeFor('password')}
                          />
                        </label> */}
                      </div>
                      <div style={{float: 'right'}}>
                        <Button variant="raised" onClick={this.login}>Log In</Button>
                      </div>
                    </Card>
                  {/* </form> */}
                </div>
              </Paper>
            </Grid>
            <Grid item sm={4}></Grid>
          </Grid>
        </div>
      </div >
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(LoginPage));
