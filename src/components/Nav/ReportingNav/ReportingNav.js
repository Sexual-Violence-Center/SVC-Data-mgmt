import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/home">
            Home
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
      </ul>
    </div>
  </div>
);

export default Nav;