import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import DataEntryPage from './components/DataEntryPage/DataEntryPage';
import PinkForm from './components/PinkForm/PinkForm';
import YellowForm from './components/YellowForm/YellowForm';
import FederalReport from './components/FederalReport/FederalReport';
import CountyReport from './components/CountyReport/CountyReport';
import CustomReport from './components/CustomReport/CustomReport';
import UserLandingPage from './components/UserLandingPage/UserLandingPage';
import AdminLandingPage from './components/AdminLandingPage/AdminLandingPage';
import UserEntryPage from './components/UserEntryPage/UserEntryPage';
import SearchUpdatePage from './components/SearchUpdatePage/SearchUpdatePage';
import CustomReportOutput from './components/CustomReport/CustomReportOutput';
import './styles/main.css';
import { teal, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: grey[600]
    },
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
  <div>
    <Header />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/telephone"
          component={PinkForm}
        />
        <Route
          path="/in-person"
          component={YellowForm}
        />
        <Route 
        path="/data_entry_page"
        component={DataEntryPage}
        />
        <Route
          path="/federal_report"
          component={FederalReport}
        />
        <Route
          path="/county_report"
          component={CountyReport}
        />
        <Route
          path="/custom_report"
          component={CustomReport}
        />
        <Route
          path="/userlandingpage"
          component={UserLandingPage}
        />
        <Route
          path="/adminlandingpage"
          component={AdminLandingPage}
        />
        <Route
          path="/user_entry_page"
          component={UserEntryPage}
        />
        <Route 
          path="/search_and_update"
          component={SearchUpdatePage}
        />
        <Route
          path="/custom_report_output"
          component={CustomReportOutput}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
  </MuiThemeProvider>
);

export default App;
