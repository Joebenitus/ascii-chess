import React from 'react';
import Board from './Board';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
}))

function App() {
  const classes = useStyles();
  return (
    <>
      <Board className={classes.root}/>
    </>
  );
}

export default App;
