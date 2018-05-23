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
          <Link to="/adminlandingpage">
          Admin Home
          </Link>
        </li>
        <li>
          <Link to="/user_entry_page">
          User Entry
          </Link>
        </li>
        <li>
          <Link to="/data_entry_page">
          Data Entry
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;