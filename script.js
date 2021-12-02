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

// console.log(bump("n")); // "Woohoo!");
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); // "Car Dead");
// console.log(bump("______n___n_")); // "Woohoo!");

/* function last(x) {
  let newAr = x.split(" ");
  newAr.sort(function (a, b) {
    return newAr[][]
  }); */

// let arr=[];
// for(let i=newAr.length-1; i>=0; i--){
//   arr.push(newAr[i])
// }
//console.log(arr)

//const upRev=rev.reverse();
// var arr=[];
// for(let i=x.length; i<=0; i--){
//   arr.push(upRev[i])
// }
//}
//console.log(last("man i need a taxi up to ubud")); //, ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// console.log(last('what time are we climbing up the volcano'))//, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
// console.log(last('take me to semynak'))//, ['take', 'me', 'semynak', 'to']);

var dogs = [
  "Hardly any",
  "More than a handful!",
  "Woah that's a lot of dogs!",
  "101 DALMATIONS!!!",
];
const howManyDalmatians = (number) =>
  number <= 10
    ? dogs[0]
    : number <= 50
    ? dogs[1]
    : number === 101
    ? dogs[3]
    : dogs[2];

// console.log(howManyDalmatians(26)); //, "More than a handful!");
// console.log(howManyDalmatians(8)); //, "Hardly any");
// console.log(howManyDalmatians(14)); //, "More than a handful!");
// console.log(howManyDalmatians(80)); //, "Woah that's a lot of dogs!");
// console.log(howManyDalmatians(100)); //, "Woah that's a lot of dogs!");
// console.log(howManyDalmatians(101)); //, "101 DALMATIANS!!!");

function findLongest(str) {
  let spl = str.split(" ");
  let res = spl.sort(function (a, b) {
    return b.length - a.length;
  });
  return res[0].length;
}
console.log(findLongest("The quick white fox jumped around the massive dog")); //, 7);
console.log(findLongest("Take me to tinseltown with you")); //, 10);
console.log(findLongest("Sausage chops")); //, 7);
console.log(findLongest("Wind your body and wiggle your belly")); //, 6);
console.log(findLongest("Lets all go on holiday")); //, 7);
