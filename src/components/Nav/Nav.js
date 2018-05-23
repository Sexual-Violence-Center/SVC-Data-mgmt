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
        {/* <li>
          <Link to="/admin_tools">
        Admin Tools
          </Link>
        </li>
        <li>
          <Link to="/data_entry_page">
          Data Entry
          </Link>
        </li>
        <li>
          <Link to="/reporting_page">
          Reporting
          </Link>
        </li> */}
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