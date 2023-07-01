// use prompt to request user for input
//A - 79,
//B- 60 - 79, 
//C -  59 - 49, 
//D - 40 - 49, 
//E - less - 40 

const gradeGenerator = function (num) {
  let grade = prompt ("insert final grade")
  if (num > 79) {
    return `You got an A`;
  } else if (num >= 60 && num <= 79) {
    return `You got a B`;
  } else if (num >= 49 && num <= 59) {
    return `You got a C`;
  } else if (num >= 40 && num < 49) {
    return `You got a D`;
  } else if (num < 40) {
    return `You got an E`;
  }
};




