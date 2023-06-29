import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router';

import NavBar from './NavBar';
import Login from './User/Login';
import SignUp from './User/SignUp';
import HomePage from './HomePage/HomePage';
import { userSelector } from '../redux/reducers/authReducer';

const App = () => {
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div className='app-container'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
