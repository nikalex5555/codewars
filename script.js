var circleArea = function (radius) {
  if (radius <= 0 || isNaN(radius) || "string" === typeof (radius)) {
    return false;
  } else {
   let res= (Math.PI * Math.pow(radius, 2)).toFixed(2);
   return Number(res)
  }
};
console.log(circleArea(-1485.86)); //returns false
console.log(circleArea(0)); //returns false
console.log(circleArea(43.26,73)); //returns 5881.25
console.log(circleArea(68)); //returns 14526.72
console.log(circleArea(NaN));


function iceBrickVolume(radius, bottleLength, rimLength) {
  // Your code should be here ;)
  let x=bottleLength-rimLength;
  let cylinder=Math.PI*radius*radius*x;
  return cylinder;

}