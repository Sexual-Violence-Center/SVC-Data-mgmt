import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/adminTools">
        Admin Tools
          </Link>
        </li>
        <li>
          <Link to="/pinkform">
          Pink Form
          </Link>
        </li>
        <li>
          <Link to="/yellowform">
          Yellow Form
          </Link>
        </li>
        <li>
          <Link to="/reportrouting">
          Reports 
          </Link>
        </li>
        <li>
          <Link to="/fedreport">
          Federal Report
          </Link>
        </li>
        <li>
          <Link to="/countyreport">
          County Report
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;