import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router';

import NavBar from './NavBar';
import Login from './User/Login';
import SignUp from './User/SignUp';
import HomePage from './HomePage/HomePage';
import { userSelector } from '../redux/reducers/authReducer';

const App = () => {
  const navigate = useNavigate();
  const user = useSelector(userSelector);

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

  return (
    <div className='app-container'>
      <NavBar user={user} />
      <Routes>
        {!user ? (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </>
        ) : (
          <Route path='/home' element={<HomePage user={user} />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
