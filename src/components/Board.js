import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

import * as ChessJS from 'chess.js';

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;
const pieces = require('../game/pieces.js')
const { R, r, N, n, B, b, Q, q, K, k, P, p, open } = pieces.pieces

const board = [
  [
    r,
    n,
    b,
    q,
    k,
    b,
    n,
    r,
  ],
  [
    p,
    p,
    p,
    p,
    p,
    p,
    p,
    p,
  ],
  [
    open,
    open,
    open,
    open,
    open,
    open,
    open,
    open,
  ],
  [
    open,
    open,
    open,
    open,
    open,
    open,
    open,
    open,
  ],
  [
    open,
    open,
    open,
    open,
    open,
    open,
    open,
    open,
  ],
  [
    open,
    open,
    open,
    open,
    open,
    open,
    open,
    open,
  ],
  [
    P,
    P,
    P,
    P,
    P,
    P,
    P,
    P,
  ],
  [
    R,
    N,
    B,
    Q,
    K,
    B,
    N,
    R,
  ],
]
console.log(board)

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
  const [boardState, setBoardState] = useState(new Chess('1nq1kb1r/r1pppbp1/p4n2/1p3p1p/1PNQP3/3B4/P1PP1PPP/R1B1K1NR w KQk - 8 11'));
  const [boardStateFen, setBoardStateFen] = useState(boardState.fen());

  const fenToArray = () => {
    const arr = []
    let fen = boardState.fen().split(' ')[0];
    fen = fen.split('/')
    for (let row = 0; row < fen.length; row++) {
      for (let col = 0; col < fen[row].length; col++) {
        if(parseInt(fen[row][col])) {
          const whiteSpace = parseInt(fen[row][col]);
          for (let i = 0; i < whiteSpace; i++) {
            arr.push(open);
            col++;
          }
        } else {
          arr.push(fen[row][col])
        }
      }
    }
    return arr;
  }
  fenToArray()

  const [position, setPosition] = useState(fenToArray())
  console.log(position)

  const makeMove = () => {
    if (!boardState.game_over()) {
      const moves = boardState.moves();
      const move = moves[Math.floor(Math.random() * moves.length)];
      boardState.move(move);
      setBoardState(boardState);
      setBoardStateFen(boardState.fen())
    }
  }

  const boardArray = boardState.board()
  console.log(boardArray)

  return (
    <Container className={classes.root}>
      <p onClick={() => makeMove()}>{boardStateFen}</p>
      {/* <p id='h'>
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
      </p> */}
    </Container>
  )
}
export default Board;