import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router';
import NavBar from '../NavBar';
import { userSelector } from '../../redux/reducers/authReducer';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  console.log('user', user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return (
    <div className='container'>
      <NavBar />
      <p>Logged in </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
