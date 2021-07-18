import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import logo from './../images/lablinkTransparentBlue.png'

import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  logoStyle: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '20%',
    padding: 'px',
    borderRadius: '5px',
    alignItems: 'center',
    marginBottom: '2vh' 
  },

  signIn: {
    display: 'block',
    fontSize: '30px',
    padding: '0px',
    margin: '20px',
  },

  signInContainer: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '30%',
    boxShadow: '0px 0px 10px 2px #3d3d3d',
    padding: 'px',
    borderRadius: '5px',
    alignItems: 'center',
  },

  signInBody: {
    color: 'red',
  },

  signInLabel: {
    textAlign: 'left',
  },

  textEntry: {
    margin: '10px',
  },

  forgotPassword: {
    textAlign: 'right',
    fontSize: '10px',
    display: 'block',
  },

  horizontalFlexContainer: {
    display: 'flex',
  },

  button: {
    width: '50%',
    margin: '5px',
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  // Initialising state variables
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);

  const submitLogin = async (event) => {
    event.preventDefault(); // Prevent page reload
    const response = await fetch('http://localhost:8080/auth/login', {
      headers : {
        'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log(response.status)
    // If bad response
    if (response.status !== 200) {
        setPasswordError('Incorrect username or password!');
        return;
    }
    // If good response, following code will execute. Set token, set logged in and go to dashboard
    const json = await response.json();
    localStorage.setItem('auth_token', json.uid);
    setLoggedIn(true);
    history.push('/dashboard');
  };

  return (
    <div>
      <img 
        src={logo} 
        className={classes.logoStyle}
      />
      {/* <p className={classes.logo}>LabLink</p> */}
      <form onSubmit={submitLogin}>
        <div className={classes.signInContainer}>
          <p className={classes.signIn}>Log In</p>

          <TextField
            className={classes.textEntry}
            variant='outlined'
            label='Email address'
            name='email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={passwordError !== ''}
            helperText={passwordError}
          />
          <TextField
            className={classes.textEntry}
            variant='outlined'
            label='Password'
            type='password'
            name='password'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={passwordError !== ''}
            helperText={passwordError}
          />
          <a classNames={classes.forgotPassword} href=''>
            Forgot your password?
          </a>
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
            type='submit'
            fullWidth
          >
            Log In
          </Button>

          <p>Don't have an account?</p>

          <Button
            className={classes.button}
            color='secondary'
            variant='contained'
            fullWidth
            component={Link}
            to='/signup'
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
