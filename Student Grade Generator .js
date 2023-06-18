A - 79, 
B - 60 - 79, 
C -  59 - 49, 
D - 40 - 49, 
E - less - 40,


function generateStudentGrade() {
    const marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));
  
    if (marks >= 80) {
      console.log("Grade: A");
    } else if (marks >= 60) {
      console.log("Grade: B");
    } else if (marks >= 50) {
      console.log("Grade: C");
    } else if (marks >= 40) {
      console.log("Grade: D");
    } else {
      console.log("Grade: E");
    }
  }