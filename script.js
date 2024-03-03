// console.log('Question 1:');
function circleCalculations(radius) {
  const perimCircle = 2 * radius * Math.PI;
  const areaCircle = radius * radius * Math.PI;

  //   console.log(`The perimeter of the circle is ${perimCircle}`);
  //   console.log(`The area of the circle is ${areaCircle}`);
  msg = `The perimeter of the circle is ${perimCircle} <br> The area of the circle is ${areaCircle}`;
  document.getElementById('answer1').innerHTML = msg;
}
circleCalculations(5.5);

// console.log('Question 2:');
function rectangleCalculations(width, height) {
  const perimRect = 2 * width + 2 * height;
  const areaRect = width * height;

  //   console.log(`The perimeter of the rectangle is ${perimRect}`);
  //   console.log(`The area of the rectangle is ${areaRect}`);
  msg = `The perimeter of the rectangle is ${perimRect} <br> The area of the rectangle is ${areaRect}`;
  document.getElementById('answer2').innerHTML = msg;
}
rectangleCalculations(4.5, 7.9);

// console.log('Question 3:');
function cylinderVolume() {
  let cylinderRadius = prompt('Please enter the radius of the cylinder');
  let cylinderLength = prompt('Please enter the length of the cylinder');
  const areaCylinder = cylinderRadius * cylinderRadius * Math.PI;
  const volCylinder = areaCylinder * cylinderLength;

  //   console.log(`The volume of the cylinder is ${volCylinder}`);
  //   console.log(`The area of the cylinder is ${areaCylinder}`);
  msg = `The volume of the cylinder is ${volCylinder} <br> The area of the cylinder is ${areaCylinder}`;
  document.getElementById('answer3').innerHTML = msg;
}
document
  .querySelector('.cylinder-btn')
  .addEventListener('click', cylinderVolume);

// console.log('Question 4:');
function tipCalc() {
  const subtotal = document.querySelector('#subtotal').value;
  const gratuityRate = document.querySelector('#gratuity-rate').value;
  const gratuity = (gratuityRate / 100) * subtotal;
  const total = gratuity + subtotal * 1;

  //   console.log(`The gratuity is $${gratuity} and the total is $${total}.`);
  msg = `The gratuity is $${gratuity} and the total is $${total}.`;
  document.getElementById('answer4').innerHTML = msg;
}
document.querySelector('.tipcalc-btn').addEventListener('click', tipCalc);
