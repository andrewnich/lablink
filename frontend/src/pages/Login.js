import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { useHistory, Link } from 'react-router-dom'

const useStyles = makeStyles (() => ({
  logo: {

  },

  signIn: {
    display: 'block',
    fontSize: '30px',
    padding: '0px',
    margin: '20px'

  }, 

  signInContainer: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '30%',
    boxShadow: '0px 0px 10px 2px #3d3d3d',
    padding: 'px',
    borderRadius: '5px',
    alignItems: 'center'
  },

  signInBody: {
    color: 'red',
  },

  signInLabel: {
    textAlign: 'left'
  },

  textEntry : {
    margin: '10px'
  },

  forgotPassword : {
    textAlign: 'right',
    fontSize: '10px',
    display: 'block'
  },

  horizontalFlexContainer : {
    display: 'flex'
  },

  button : {
    width: '50%',
    margin: '5px',
  }
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  
  return (
  <div>
      <p className={classes.logo}>LabLink</p>
      <div className={classes.signInContainer}>
        <p className={classes.signIn}>Sign In</p>
        <form>
          <TextField className={classes.textEntry} variant='outlined' label='Email address' name="email" required/>
          <TextField className={classes.textEntry} variant='outlined' label='Password' type='password' name="password" required/>
          <a classNames={classes.forgotPassword} href="">Forgot your password?</a>
          <Button className={classes.button} color="primary" variant="contained" type="submit" fullWidth>Log In</Button>
        </form>
        <Button className={classes.button} color="secondary" variant="contained" fullWidth component={Link} to='/signup'>Sign Up</Button>
      </div>
  </div>
  );
};
 

export default Login;
