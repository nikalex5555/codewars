var circleArea = function (radius) {
  if (radius <= 0 || isNaN(radius) || "string" === typeof radius) {
    return false;
  } else {
    let res = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    return Number(res);
  }
};
console.log(circleArea(-1485.86)); //returns false
console.log(circleArea(0)); //returns false
console.log(circleArea(43.26, 73)); //returns 5881.25
console.log(circleArea(68)); //returns 14526.72
console.log(circleArea(NaN));

/* function iceBrickVolume(radius, bottleLength, rimLength) {
  // Your code should be here ;)
  let x = bottleLength - rimLength;
  //let cylinder=radius*radius*x*h;

  return cylinder;
} */

function bump(x) {
  let d = x.split("");
  let res = 0;
  d.forEach((element) => {
    if (element.includes("n")) res++;
  });

  if (res > 15) {
    return "Car Dead";
  } else {
    return "Woohoo!";
  }
}

console.log(bump("n")); // "Woohoo!");
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); // "Car Dead");
console.log(bump("______n___n_")); // "Woohoo!");
