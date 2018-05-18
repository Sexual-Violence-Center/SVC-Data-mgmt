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
          <Link to="/admintools">
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
          <Link to="/customreport">
          Custom Report
          </Link>
        </li>
        <li>
          <Link to="/federalreport">
          Federal Report
          </Link>
        </li>
        <li>
          <Link to="/countyreport">
          County Report
          </Link>
        </li>
        <li>
          <Link to="/userlandingpage">
          User Landing Page
          </Link>
        </li>
        <li>
          <Link to="/adminlandingpage">
          Admin Landing Page
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;