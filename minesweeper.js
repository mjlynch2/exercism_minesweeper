const annotate = (input) => {
  if (!isValid(input)) {
    return `[${input}] is invalid`;
  }
  let width = input[0].length;
  let height = input.length;
  let result = [];

  for (let y = 0; y < height; y++) {
    let row = Array(width);
    for (let x = 0; x < width; x++) {
      let sum = 0;
      if (hasMine([...input[y]][x])) {
        console.log(`Value at [${x}, ${y}]: ${[...input[y]][x]}`);
        row[x] = "*";
        console.log(row);
        continue;
      } else {
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            let xCoord = x + i;
            let yCoord = y + j;
            if (0 > xCoord || xCoord > width - 1) {
              continue;
            } else if (0 > yCoord || yCoord > height - 1) {
              continue;
            } else {
              console.log(
                `Current cell is [${x}, ${y}]. Checking [${xCoord}, ${yCoord}] for mine...`
              );
              if (hasMine([...input[yCoord]][xCoord])) {
                sum++;
              }
            }
          }
        }
      }
      console.log(`Value at [${x}, ${y}]: ${sum}`);
      if (sum > 0) {
        row[x] = sum;
      } else {
        row[x] = " ";
      }
      console.log(row);
      rowString = row.join("");
      result.push(rowString);
    }
  }
  console.log(result);
  return result;
};

const hasMine = (val) => {
  return val == "*";
};

const sumAdjacent = (x, y) => {
  return val;
};

const isValid = (input) => {
  // board cannot contain invalid characters
  const regex = /[^\* ]/g;
  // board must be rectangular
  const width = input[0].length;
  let isValid = true;
  [...input].forEach((e) => {
    if (regex.test(e)) {
      console.log(`Error: [${input}] contains invalid character(s)`);
      isValid = false;
    } else if (input.length < 2 || e.length < 1 || e.length != width) {
      console.log(`Error: [${input}] is not a rectangle`);
      isValid = false;
    }
  });

  return isValid;
};

const input = [
  ["*"],
  [" "],
  [""],
  ["  ", " 1"],
  [" ", ""],
  [" ", " * ", " "],
  [" ", " ", " "],
];

const in2 = [" *", " *", "* "];

annotate(in2);
