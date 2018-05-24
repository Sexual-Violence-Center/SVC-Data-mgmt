import React from 'react';
import { Link } from 'react-router-dom';


const AdminDataEntryNav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/adminlandingpage">
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

export default AdminDataEntryNav;