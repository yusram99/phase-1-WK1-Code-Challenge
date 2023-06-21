function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerDemerit = 1;
    const maxPoints = 12;
  
    if (speed < speedLimit) {
      console.log("Ok"); // Speed is within the limit
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      console.log("Points: " + demeritPoints); // Print the number of demerit points
  
      if (demeritPoints > maxPoints) {
        console.log("License suspended"); // Driver has accumulated too many demerit points
      }
    }
  }
  
  // Example usage
  const speed = 80;
  calculateDemeritPoints(speed);
  
