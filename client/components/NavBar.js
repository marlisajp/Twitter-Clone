import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <div className='nav-container'>
      {!user && (
        <>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/'>⬅</Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
