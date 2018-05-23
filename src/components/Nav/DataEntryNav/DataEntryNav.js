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
          <Link to="/telephone">
          Telephone
          </Link>
        </li>
        <li>
          <Link to="/in-person">
          In-Person
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;