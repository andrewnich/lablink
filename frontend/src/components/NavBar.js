import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { useHistory, Link } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push('/dashboard');
  };
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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
