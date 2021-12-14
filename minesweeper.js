export const annotate = (input) => {
  if (!isValid(input)) {
    return `[${input}] is invalid`;
  }
  let width = input[0].length;
  let height = input.length;
  let result = [];

  for (let y = 0; y < height; y++) {
    let row = [];
    let rowStr = "";
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
      rowStr = row.join("");
    }
    result.push(rowStr);
  }
  return result;
};

const hasMine = (val) => {
  return val === "*";
};


const isValid = (input) => {
  const regex = /[^\* ]/g;
  
  let isValid = true;
  
  if(input.length == 0) {
  // board can't be empty
    return false;
  }
  let width = input[0].length;
  [...input].forEach((e) => {
    if (regex.test(e)) {
      // board cannot contain invalid characters
      isValid = false;
    } else if (input.length < 2 || e.length < 1 || e.length != width) {
      // board must be rectangular
      isValid = false;
    }
  });

  return isValid;
};

