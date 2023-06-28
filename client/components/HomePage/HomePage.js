import React from 'react';

const HomePage = ({ user }) => {
  console.log('user in homepage', user);
  return (
    <div className='container'>
      <p>Logged in</p>
    </div>
  );
};

export default HomePage;
