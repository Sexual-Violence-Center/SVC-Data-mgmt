import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../Logout/Logout';

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
          <Link to="/reporting_page">
          Reporting
          </Link>
        </li>
        <li>
          <Link to="/admin_tools">
        Admin Tools
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