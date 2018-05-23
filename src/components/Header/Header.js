import React from 'react';
import Nav from '../../components/Nav/Nav';
import {
  BrowserRouter as Router
} from 'react-router-dom';

const Header = ({ title }) => (
  <div className="instructions">
    <div>
      <h1 className="lead">{ title }</h1>
    </div>
  </div>
);

export default Header;
