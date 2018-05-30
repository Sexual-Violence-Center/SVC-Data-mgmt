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
          <Link to="/user_entry_page">
          User Entry
          </Link>
        </li>
        <li>
          <Link to="/data_entry_page">
          Data Entry
          </Link>
        </li>
        <li>
          <Link to="/search_and_update">
          Search/Update
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