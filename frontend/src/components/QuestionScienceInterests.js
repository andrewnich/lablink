import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(() => ({
  qnaContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    alignItems: 'left',
    width: '60%',
  },

  block: {
    display: 'block',
  },
}));

const QuestionScienceInterests = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state, setState] = React.useState({
    checkBio: false,
    checkedChem: false,
    checkedPhys: false,
  });

  if (props.isCurrent) {
    return (
      <form>
        <div className={classes.qnaContainer}>
          <h1 className={classes.block}>
            Help us help you by answering a couple questions...
          </h1>
          <h2 className={classes.block}>
            What areas of science are you interested in?
          </h2>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedBio}
                onChange={handleChange}
                name='checkedBio'
                color='primary'
              />
            }
            label='Biology'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedChem}
                onChange={handleChange}
                name='checkedChem'
                color='primary'
              />
            }
            label='Chemistry'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedPhys}
                onChange={handleChange}
                name='checkedPhys'
                color='primary'
              />
            }
            label='Physics'
          />
          <Button type='submit' color='primary' variant='contained'>
            Next
          </Button>
        </div>
      </form>
    );
  } else {
    return <div></div>;
  }
};

export default QuestionScienceInterests;
