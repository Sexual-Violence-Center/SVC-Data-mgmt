import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../Home/Logout';


const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/adminlandingpage">
          Home
          </Link>
        </li>
        <li>
          <Link to="/custom_report">
          Custom Report
          </Link>
        </li>
        <li>
          <Link to="/federal_report">
          Federal Report
          </Link>
        </li>
        <li>
          <Link to="/county_report">
          County Report
          </Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;