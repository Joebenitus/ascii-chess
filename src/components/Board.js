import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

const pieces = require('../game/pieces.js')
const { black, white, open } = pieces.pieces

const board = {
  1: {
    1: white.r,
    2: white.n,
    3: white.b,
    4: white.q,
    5: white.k,
    6: white.b,
    7: white.n,
    8: white.r,
  },
  2: {
    1: white.p,
    2: white.p,
    3: white.p,
    4: white.p,
    5: white.p,
    6: white.p,
    7: white.p,
    8: white.p,
  },
  3: {
    1: open,
    2: open,
    3: open,
    4: open,
    5: open,
    6: open,
    7: open,
    8: open,
  },
  4: {
    1: open,
    2: open,
    3: open,
    4: open,
    5: open,
    6: open,
    7: open,
    8: open,
  },
  5: {
    1: open,
    2: open,
    3: open,
    4: open,
    5: open,
    6: open,
    7: open,
    8: open,
  },
  6: {
    1: open,
    2: open,
    3: open,
    4: open,
    5: open,
    6: open,
    7: open,
    8: open,
  },
  7: {
    1: black.p,
    2: black.p,
    3: black.p,
    4: black.p,
    5: black.p,
    6: black.p,
    7: black.p,
    8: black.p,
  },
  8: {
    1: black.r,
    2: black.n,
    3: black.b,
    4: black.q,
    5: black.k,
    6: black.b,
    7: black.n,
    8: black.r,
  },
}

const useStyles = makeStyles(() => ({
  root: {
    '& > p': {
      marginTop: '0px',
      marginBottom: '0px'
    }
    
  }
}))
const Board = () => {
  const classes = useStyles();

  const boardAsArray = () => {
    let array = []
    for (let i = 1; i <= Object.keys(board).length; i++) {
      array.push([])
      for (let j = 1; j <= Object.keys(board[i]).length; j++) {
        array[i-1].push(board[i][j])
      }
    }
    return array;
  }

  

  const [position, setPosition] = useState(boardAsArray())

  return (
    <Container className={classes.root}>
      <p id='h'>
        [<span id={1}>{position[0][0]}</span>]
        [<span id={2}>{position[0][1]}</span>]
        [<span id={3}>{position[0][2]}</span>]
        [<span id={4}>{position[0][3]}</span>]
        [<span id={5}>{position[0][4]}</span>]
        [<span id={6}>{position[0][5]}</span>]
        [<span id={7}>{position[0][6]}</span>]
        [<span id={8}>{position[0][7]}</span>]
      </p>
      <p id='g'>
        [<span id={1}>{position[1][0]}</span>]
        [<span id={2}>{position[1][1]}</span>]
        [<span id={3}>{position[1][2]}</span>]
        [<span id={4}>{position[1][3]}</span>]
        [<span id={5}>{position[1][4]}</span>]
        [<span id={6}>{position[1][5]}</span>]
        [<span id={7}>{position[1][6]}</span>]
        [<span id={8}>{position[1][7]}</span>]
      </p>
      <p id='f'>
        [<span id={1}>{position[2][0]}</span>]
        [<span id={2}>{position[2][1]}</span>]
        [<span id={3}>{position[2][2]}</span>]
        [<span id={4}>{position[2][3]}</span>]
        [<span id={5}>{position[2][4]}</span>]
        [<span id={6}>{position[2][5]}</span>]
        [<span id={7}>{position[2][6]}</span>]
        [<span id={8}>{position[2][7]}</span>]
      </p>
      <p id='e'>
        [<span id={1}>{position[3][0]}</span>]
        [<span id={2}>{position[3][1]}</span>]
        [<span id={3}>{position[3][2]}</span>]
        [<span id={4}>{position[3][3]}</span>]
        [<span id={5}>{position[3][4]}</span>]
        [<span id={6}>{position[3][5]}</span>]
        [<span id={7}>{position[3][6]}</span>]
        [<span id={8}>{position[3][7]}</span>]
      </p>
      <p id='d'>
        [<span id={1}>{position[4][0]}</span>]
        [<span id={2}>{position[4][1]}</span>]
        [<span id={3}>{position[4][2]}</span>]
        [<span id={4}>{position[4][3]}</span>]
        [<span id={5}>{position[4][4]}</span>]
        [<span id={6}>{position[4][5]}</span>]
        [<span id={7}>{position[4][6]}</span>]
        [<span id={8}>{position[4][7]}</span>]
      </p>
      <p id='c'>
        [<span id={1}>{position[5][0]}</span>]
        [<span id={2}>{position[5][1]}</span>]
        [<span id={3}>{position[5][2]}</span>]
        [<span id={4}>{position[5][3]}</span>]
        [<span id={5}>{position[5][4]}</span>]
        [<span id={6}>{position[5][5]}</span>]
        [<span id={7}>{position[5][6]}</span>]
        [<span id={8}>{position[5][7]}</span>]
      </p>
      <p id='b'>
        [<span id={1}>{position[6][0]}</span>]
        [<span id={2}>{position[6][1]}</span>]
        [<span id={3}>{position[6][2]}</span>]
        [<span id={4}>{position[6][3]}</span>]
        [<span id={5}>{position[6][4]}</span>]
        [<span id={6}>{position[6][5]}</span>]
        [<span id={7}>{position[6][6]}</span>]
        [<span id={8}>{position[6][7]}</span>]
      </p>
      <p id='a'>
        [<span id={1}>{position[7][0]}</span>]
        [<span id={2}>{position[7][1]}</span>]
        [<span id={3}>{position[7][2]}</span>]
        [<span id={4}>{position[7][3]}</span>]
        [<span id={5}>{position[7][4]}</span>]
        [<span id={6}>{position[7][5]}</span>]
        [<span id={7}>{position[7][6]}</span>]
        [<span id={8}>{position[7][7]}</span>]
      </p>
    </Container>
  )
}
export default Board;