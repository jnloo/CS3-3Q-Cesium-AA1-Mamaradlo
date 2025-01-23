// Constant and Variables
const PI = 3.14;
var radius = 6.378e6;

// Calculations
let circumference = 2 * PI * radius;
let surfaceArea = 4 * PI * (radius) ** 2;
let volume = (4/3) * PI * (radius) ** 3;

// Final output
document.write('The radius of the sphere is ' + radius + '<br>');
document.write('The circumference is ' + circumference + '<br>');
document.write('The surface area is ' + surfaceArea + '<br>');
document.write('The volume is ' + volume + '<br>');
