const speed = parseInt(prompt("Enter the car's speed in km/h:"));
if (speed < 70) {
    console.log ("Ok")
} else {
    const demeritPoints = Math.floor((speed - 70) / 5);
    console.log ("Points:", demeritPoints);
}