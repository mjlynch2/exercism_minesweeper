const annotate = (input) => {
  let width;
  let height;
  if (isValid(input)) {
    width = input[0].length;
    height = input.length;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            let xCoord = x + i;
            let yCoord = y + j;
            if (0 > xCoord || xCoord > width) {
              return;
            } else if (0 > yCoord || yCoord > height) {
              return;
            } else {
              console.log(
                `Current cell is [${x}, ${y}]. Checking [${xCoord}, ${yCoord}] for mine...`
              );
              if ([...input[yCoord]][xCoord] == "*") {
                //console.log([...input[yCoord]][xCoord]);
                sum++;
              }
            }
          }
        }
        //console.log(sum);
        if ([...input[y]][x] > 0) {
          [...input[y]][x] = sum;
        }
      }
    }
    console.log(input);
  }
};

const hasMine = (val) => {
  return val == '*';
}

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

//console.log(`[${in2[0]}], [${[...in2[2]][1]}]`);
annotate(in2);

/*
.*
.*
*.
*/
