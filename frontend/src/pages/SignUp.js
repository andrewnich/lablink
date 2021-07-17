import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  logo: {
    textAlign: 'center'
  },

  signUp: {
    display: 'block',
    fontSize: '30px',
    padding: '0px',
    margin: '20px',
  },

  signUpContainer: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '30%',
    boxShadow: '0px 0px 10px 2px #3d3d3d',
    padding: 'px',
    borderRadius: '5px',
    alignItems: 'center',
  },

  textEntry: {
    margin: '10px',
  },

  forgotPassword: {
    textAlign: 'right',
    fontSize: '10px',
    display: 'block',
  },

  button: {
    width: '50%',
    margin: '5px',
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const submitSignUp = async (event) => {
    event.preventDefault(); // Prevents form from being reloaded upon submit

    // Test if password and confirm password 
    if (password !== confirmPassword) {
      setPasswordError('Please make sure your passwords match');
      return;
    }

    // If function reaches this point, entered passwords were identical
    // Send this data to the web server
    const response = await fetch('http://localhost:8080/auth/register', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // If bad response
    if (response.status !== 200) {
      setEmailError('Email already in use');
      return;
    }

    // If good response, set token and logged in status and go to dashboard
    const json = await response.json();
    localStorage.setItem('auth_token', json.token);
    setLoggedIn(true);
    history.push('/dashboard');
  }

  return (
    <div>
      <p className={classes.logo}>LabLink</p>
      <form onSubmit={submitSignUp}>
        <div className={classes.signUpContainer}>
          <p className={classes.signUp}>Sign Up</p>

          <TextField
            className={classes.textEntry}
            variant='outlined'
            label='Email address'
            name='email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={emailError !== ''}
            helperText={emailError}
          />
          <TextField
            className={classes.textEntry}
            variant='outlined'
            label='Password'
            type='password'
            name='password'
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setPasswordError('')
            }}
            error={passwordError !== ''}
            helperText={passwordError}
          />
          <TextField
            className={classes.textEntry}
            variant='outlined'
            label='Re-enter password'
            type='password'
            name='reenterPassword'
            required
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value)
              setPasswordError('');
            }}
            error={passwordError !== ''}
            helperText={passwordError}
          />
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
            type='submit'
            fullWidth
          >
            Sign Up
          </Button>

          <p>Already got an account?</p>

          <Button
            className={classes.button}
            color='secondary'
            variant='contained'
            fullWidth
            component={Link}
            to='/'
          >
            Log In
          </Button>

        </div>
      </form>
    </div>
  );
};

export default Login;
