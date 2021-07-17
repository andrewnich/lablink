import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginBottom: '20px',
  },
  media: {
    height: 140,
  },
});

const LabDemoCard = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleLabCardClick = () => {
    history.push(`/lab/${props.id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleLabCardClick}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LabDemoCard;
