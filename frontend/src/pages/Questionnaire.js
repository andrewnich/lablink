import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { useHistory, Link } from 'react-router-dom';

const Questionnaire = () => {
  const history = useHistory();
  const [topicsState, setTopicsState] = React.useState({
    biology: false,
    chemistry: false,
    physics: false,
  });
  const handleTopicChange = (event) => {
    setTopicsState({
      ...topicsState,
      [event.target.name]: event.target.checked,
    });
  };

  const [hearing, setHearing] = React.useState('no');
  const hearingChange = (event) => {
    setHearing(event.target.value);
  };

  const [english, setEnglish] = React.useState('no');
  const englishChange = (event) => {
    setEnglish(event.target.value);
  };

  const [year, setYear] = React.useState('');
  const yearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = () => {
    //TODO: do stuff with this info
    console.log(`topics: ${topicsState}`);
    console.log(`hearing: ${hearing}`);
    console.log(`english: ${english}`);
    console.log(`year: ${year}`);

    // go to dashboard
    history.push('/dashboard');
  };

  return (
    <Container
      component='main'
      maxWidth='md'
      className='main'
      style={{ marginTop: '15vh' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h4' gutterBottom>
          Help us help you by answering a couple questions...
        </Typography>
        <Typography variant='h5'>
          What areas of science are you interested in?
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={topicsState.biology}
                onChange={handleTopicChange}
                name='biology'
              />
            }
            label='Biology'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={topicsState.chemistry}
                onChange={handleTopicChange}
                name='chemistry'
              />
            }
            label='Chemistry'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={topicsState.physics}
                onChange={handleTopicChange}
                name='physics'
              />
            }
            label='Physics'
          />
        </FormGroup>
        <Typography variant='h5'>Are you hard of hearing?</Typography>
        <RadioGroup
          aria-label='hardofhearing'
          name='hardofhearing1'
          value={hearing}
          onChange={hearingChange}
        >
          <FormControlLabel value='yes' control={<Radio />} label='Yes' />
          <FormControlLabel value='no' control={<Radio />} label='No' />
        </RadioGroup>
        <Typography variant='h5'>Is English your first language?</Typography>
        <RadioGroup
          aria-label='isenglishfirstlanguage'
          name='isenglishfirstlanguage1'
          value={english}
          onChange={englishChange}
        >
          <FormControlLabel value='yes' control={<Radio />} label='Yes' />
          <FormControlLabel value='no' control={<Radio />} label='No' />
        </RadioGroup>
        <Typography variant='h5'>
          What is the highest level of school you have completed?
        </Typography>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={year}
          onChange={yearChange}
        >
          <MenuItem value={1}>Year 1</MenuItem>
          <MenuItem value={2}>Year 2</MenuItem>
          <MenuItem value={3}>Year 3</MenuItem>
          <MenuItem value={4}>Year 4</MenuItem>
          <MenuItem value={5}>Year 5</MenuItem>
          <MenuItem value={6}>Year 6</MenuItem>
          <MenuItem value={7}>Year 7</MenuItem>
          <MenuItem value={8}>Year 8</MenuItem>
          <MenuItem value={9}>Year 9</MenuItem>
          <MenuItem value={10}>Year 10</MenuItem>
          <MenuItem value={11}>Year 11</MenuItem>
          <MenuItem value={12}>Year 12</MenuItem>
        </Select>
        <Button onClick={handleSubmit} color='primary' variant='contained'>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default Questionnaire;
