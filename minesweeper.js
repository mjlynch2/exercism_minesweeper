export const annotate = (input) => {
  if (!isValid(input)) {
    return `[${input}] is invalid`;
  }

  const board = {
    input: input,
    width: input[0].length,
    height: input.length,
  };

  let result = [];

  for (let y = 0; y < board.height; y++) {
    let rowStr = "";
    for (let x = 0; x < board.width; x++) {
      let sum = 0;
      if (hasMine([...board.input[y]][x])) {
        sum = -1;
      } else {
        sum = sumAdjacent(x, y, board);
      }
      rowStr = buildRow(sum, rowStr);
    }
    result.push(rowStr);
  }
  return result;
};

const hasMine = (val) => {
  return val === "*";
};

const sumAdjacent = (x, y, board) => {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let xCoord = x + i;
      let yCoord = y + j;
      if (0 > xCoord || xCoord > board.width - 1) {
        continue;
      } else if (0 > yCoord || yCoord > board.height - 1) {
        continue;
      } else {
        if (hasMine([...board.input[yCoord]][xCoord])) {
          sum++;
        }
      }
    }
  }
  return sum;
};

const buildRow = (sum, row) => {
  let newRow;
  if (sum > 0) {
    newRow = row + sum;
  } else if (sum == -1) {
    newRow = row + "*";
  } else {
    newRow = row + " ";
  }
  return newRow;
};

const isValid = (input) => {
  const regex = /[^\* ]/g;

  let isValid = true;

  if (input.length == 0) {
    // board can't be empty
    return false;
  }
  let width = input[0].length;
  [...input].forEach((e) => {
    if (regex.test(e)) {
      // board cannot contain invalid characters
      isValid = false;
    } else if ((e.length < 2 && input.length == 1) || e.length != width) {
      // board must be rectangular
      isValid = false;
    }
  });

  return isValid;
};
