function generateStudentGrade() {
  // Prompt the user to input student marks
  const marks = prompt("Enter student marks (between 0 and 100):");

  // Convert the input to a number
  const marksNumber = Number(marks);

  // Check if the input is a valid number between 0 and 100
  if (isNaN(marksNumber) || marksNumber < 0 || marksNumber > 100) {
    console.log("Invalid input. Marks should be between 0 and 100.");
    return;
  }

  // Determine the grade based on the marks
  let grade;
  if (marksNumber > 79) {
    grade = "A"; // Marks greater than 79, assign grade A
  } else if (marksNumber >= 60 && marksNumber <= 79) {
    grade = "B"; // Marks between 60 and 79 (inclusive), assign grade B
  } else if (marksNumber >= 50 && marksNumber <= 59) {
    grade = "C"; // Marks between 50 and 59 (inclusive), assign grade C
  } else if (marksNumber >= 40 && marksNumber <= 49) {
    grade = "D"; // Marks between 40 and 49 (inclusive), assign grade D
  } else {
    grade = "E"; // Marks less than 40, assign grade E
  }

  // Output the grade
  console.log("Grade: " + grade);
}

// Call the function to generate student grade
generateStudentGrade();




