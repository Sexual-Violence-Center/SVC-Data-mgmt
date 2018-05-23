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
      </ul>
    </div>
  </div>
);

export default Nav;