const annotate = (input) => {
  if (!isValid(input)) {
    return `[${input}] is invalid`;
  }
  let width = input[0].length;
  let height = input.length;
  let result = [];

  for (let y = 0; y < height; y++) {
    let row = [];
    for (let x = 0; x < width; x++) {
      let sum = 0;
      if (hasMine([...input[y]][x])) {
        sum = -1;
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
              if (hasMine([...input[yCoord]][xCoord])) {
                sum++;
              }
            }
          }
        }
      }
      if (sum > 0) {
        row.push(sum);
      } else if ((sum == -1)) {
        row.push("*");
      } else {
        row.push(" ");
      }
      rowString = row.join("");
    }
    result.push(rowString);
  }
  return result;
};

const hasMine = (val) => {
  return val === "*";
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

const input3 = ["   ", "   ", "   "];

const in2 = [" * ", " * ", "*  "];

console.log(annotate(input3));
