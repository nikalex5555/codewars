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

// function findLongest(str) {
//   let spl = str.split(" ");
//   let res = spl.sort(function (a, b) {
//     return b.length - a.length;
//   });
//   return res[0].length;
// }
// console.log(findLongest("The quick white fox jumped around the massive dog")); //, 7);
// console.log(findLongest("Take me to tinseltown with you")); //, 10);
// console.log(findLongest("Sausage chops")); //, 7);
// console.log(findLongest("Wind your body and wiggle your belly")); //, 6);
// console.log(findLongest("Lets all go on holiday")); //, 7);

// function part(x) {
//   const pit = [
//     "Partridge",
//     "PearTree",
//     "Chat",
//     "Dan",
//     "Toblerone",
//     "Lynn",
//     "AlphaPapa",
//     "Nomad",
//   ];
//    x.map(function(el,index){
//     if(pit.some(el)){
//       return 100;
//     }
//     return 10;
//   });
//   console.log(x)
// }
// console.log(part(["Grouse", "Partridge", "Pheasant"])); //, 'Mine\'s a Pint!');
// console.log(part(["Pheasant", "Goose", "Starling", "Robin"])); //, 'Lynn, I\'ve pierced my foot on a spike!!');
// console.log(
//   part([
//     "Grouse",
//     "Partridge",
//     "Pheasant",
//     "Goose",
//     "Starling",
//     "Robin",
//     "Thrush",
//     "Emu",
//     "PearTree",
//     "Chat",
//     "Dan",
//     "Square",
//     "Toblerone",
//     "Lynn",
//     "AlphaPapa",
//     "BMW",
//     "Graham",
//     "Tool",
//     "Nomad",
//     "Finger",
//     "Hamster",
//   ])
// ); //, 'Mine\'s a Pint!!!!!!!!');

function iceBrickVolume(radius, bottleLength, rimLength) {
  // Your code should be here ;)
  let x = bottleLength - rimLength;
  let cylinder = 2 * radius * radius * x;
  return cylinder;
}

function boolToWord(bool) {
  //...
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

function booleanToString(b) {
  return b === true ? "true" : "false";
}

var stringToNumber = function (str) {
  return +str;
};

function htmlspecialchars(formData) {
  // Insert your code here
  // if(formData===''){return &lt}
  // else if(formData===''){return }
  // else if(formData==='"'){return }
  // else if(formData===''){return &amp}

  return formData
    .replace(/'&'/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
console.log(htmlspecialchars("<h2>Hello World</h2>")); //,
("&lt;h2&gt;Hello World&lt;/h2&gt;");

function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

var a = "dev";
var b = "Lab";
var name = a + b;

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
function move(position, roll) {
  // return the new position
  return 2 * roll + position;
}
function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0;
}

function correct(string) {
  // your code here
  return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else if (old >= 21) {
    return "drink whisky";
  }
}

//Counting sheep...
var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
function countSheeps(arrayOfSheep) {
  let res = 0;
  arrayOfSheep.forEach((el) => {
    if (el == true) res++;
  });
  return res;
}
console.log(countSheeps(array1));

//If you can't sleep, just count sheep!!

var countSheep = function (num) {
  //your code here
  let res = [];
  for (let i = 1; i <= num; i++) {
    res.push(i + " sheep...");
  }
  return res.join("");
};
console.log(countSheep(1)); //, "1 sheep...");
console.log(countSheep(2)); //, "1 sheep...2 sheep...");
console.log(countSheep(3)); //, "1 sheep...2 sheep...3 sheep...");

//Abbreviate a Two Word Name
function abbrevName(name) {
  let newSort = name.split(" ");
  let arr = [];
  newSort.forEach((el) => {
    arr.push(el[0]);
  });
  return arr.join(".").toUpperCase();
}
console.log(abbrevName("Sam Harris")); //, "S.H");
console.log(abbrevName("Patrick Feenan")); //, "P.F");
console.log(abbrevName("Evan Cole")); //, "E.C");
console.log(abbrevName("P Favuzzi")); //, "P.F");
console.log(abbrevName("David Mendieta")); //, "D.M");

//Convert a string to an array
function stringToArray(string) {
  return string.split(" ");
}

//Find the Remainder
function remainder(a, b) {
 
  if (a > b) {
    return a % b;
  }
 else if(a < b){
  return b % a;
}
else if (a>b&&b==0) {
  return NaN;
}
else if (a<b&&b==0) {
  return b%a;
}
else if (a==0&&b==0) {
  return NaN;
} 
else if (a<0&&b<0&&a>b) {
  return b%a;
}
  else if (a<0&&b<0&&a<b) {
  return a%b;
}
}
console.log(remainder(17, 5)); //, 2, 'Returned value should be the value left over after dividing as much as possible.');
console.log(remainder(13, 72)); //, remainder(72, 13), 'The order the arguments are passed should not matter.');
console.log(remainder(1, 0)); //, 'Divide by zero should return NaN');
console.log(remainder(0, 0)); //, 'Divide by zero should return NaN');
console.log(remainder(-2, -3)); //, 'Divide by zero should return NaN');

//DNA to RNA Conversion


function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
 return dna.replace(/T/g, "U").replace(/'U'/g, "T");
}
    console.log(DNAtoRNA("TTTT"))//, "UUUU")
    console.log(DNAtoRNA("GCAT"))//, "GCAU")
    console.log(DNAtoRNA("GACCGCCGCC"))//, "GACCGCCGCC")
