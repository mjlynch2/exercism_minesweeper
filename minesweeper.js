//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const annotate = (input) => {
  input.forEach((e, i) => {
    if(isValid(e)){
      console.log(e);
    };
  });
};

const isValid = (input) => {
  // board cannot contain invalid characters
  const regex = /[^\* ]/g;
  let isValid = true;
  [...input].forEach((e) => {
    if(regex.test(e)){
      console.log(`Error: ${input} contains invalid character(s)`);
      isValid = false;
    } 
    else if (e == ""){
      console.log(`Error: ${input} contains blank(s)`);
      isValid = false;
    }
  })
  // board must be rectangular
  if (input.length < 2 || [...input].length < 1) {
      console.log(`Error: ${input} is not a rectangle`);
      isValid = false;
  }
  
  return isValid;
};

const input = [["*"], [" "], ["  ", " 1"], [" ", ""], [" ", " ", " "]];

annotate(input);
