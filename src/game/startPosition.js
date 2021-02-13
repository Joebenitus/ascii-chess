const pieces = require('./pieces.js')
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

let move1 = {
  ...board,
  [2]: {
    ...board[2],
    e: open
  },
  [4]: {
    ...board[4],
    e: white.p
  }
};

console.log(board, move1, move2, move3, move4)

