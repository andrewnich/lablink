import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useHistory, Link, useParams } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push('/dashboard');
  };
  const handleProfileClick = () => {};
  // conditional rendering stuff
  //localStorage.getItem('auth_token');
  /*
  if (!localStorage.getItem('auth_token')) {
    return <div></div>;
  }
  */
  const { currRoute } = useParams();
  console.log(currRoute);
  return (
    <AppBar position='relative' style={{ marginBottom: '20px' }}>
      <Toolbar>
        <h1
          style={{
            cursor: 'pointer',
          }}
          onClick={handleLogoClick}
        >
          LabLink
        </h1>
        <div style={{ flexGrow: '1' }} />
        <IconButton
          color='primary'
          aria-label='my profile'
          component='span'
          style={{ color: 'white' }}
          onClick={handleProfileClick}
        >
          <AccountCircle fontSize='large' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
