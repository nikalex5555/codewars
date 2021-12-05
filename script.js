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
  } else if (a < b) {
    return b % a;
  } else if (a > b && b == 0) {
    return NaN;
  } else if (a < b && b == 0) {
    return b % a;
  } else if (a == 0 && b == 0) {
    return NaN;
  } else if (a < 0 && b < 0 && a > b) {
    return b % a;
  } else if (a < 0 && b < 0 && a < b) {
    return a % b;
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
console.log(DNAtoRNA("TTTT")); //, "UUUU")
console.log(DNAtoRNA("GCAT")); //, "GCAU")
console.log(DNAtoRNA("GACCGCCGCC")); //, "GACCGCCGCC")

//Reversed Strings
function solution(str) {
  return str.split("").reverse().join("");
}

//What's the real floor?
function getRealFloor(n) {
  return n < 0
    ? n
    : n == 1 || n == 0
    ? 0
    : n <= 13
    ? n - 1
    : n > 13
    ? n - 2
    : 0;
}

//Training JS #32: methods of Math---round() ceil() and floor()

function roundIt(n) {
  let str = n.toString().split(".");
  if (str[0].length < str[1].length) {
    return Number(Math.ceil(n));
  }
  if (str[0].length > str[1].length) {
    return Number(Math.floor(n));
  }
  if (str[0].length === str[1].length) {
    return Number(Math.round(n));
  }
}
console.log(roundIt("3.45")); // , 4);
console.log(roundIt(34.5)); // , 34);
console.log(roundIt(34.56)); // , 35);

//Training JS #10: loop statement -for
function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}
console.log(pickIt([1, 2])); //,[[1],[2]]);
console.log(pickIt([1, 2, 3])); //,[[1,3],[2]]);
console.log(pickIt([3, 2, 1])); //,[[3,1],[2]]);
console.log(pickIt([10, 20, 30])); //,[[],[10,20,30]]);
console.log(pickIt([11, 21, 31])); //,[[11,21,31],[]]);
console.log(pickIt([8, 1, 5, 4, 6, 1, 1])); //,[[1,5,1,1],[8,4,6]]);

//Training JS #11: loop statement --break,continue
function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    // console.log(bag)
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
      bag.push(dolls[i]);
    }
    if (dolls[i] == "Mickey Mouse") {
      continue;
    }
    if (bag.length == 3) {
      break;
    }
  }
  return bag;
}
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"])); //,["Hello Kitty"]);
console.log(
  grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"])
); //,["Hello Kitty","Hello Kitty"]);
console.log(
  grabDoll([
    "Mickey Mouse",
    "Hello Kitty",
    "Hello Kitty",
    "Barbie doll",
    "Snow white",
  ])
); //,["Hello Kitty","Hello Kitty","Barbie doll"]);
console.log(
  grabDoll([
    "Mickey Mouse",
    "Barbie doll",
    "Hello Kitty",
    "Hello Kitty",
    "Hello Kitty",
    "Snow white",
  ])
); //,["Barbie doll","Hello Kitty","Hello Kitty"]);

function colorOf(r, g, b) {
  //coding here
  let arr = ["#"];
  if (r.toString(16).split("").length == 2) arr.push(r.toString(16).split(""));
  else if (r.toString(16).split("").length == 1) {
    arr.push("0", r.toString(16).split(""));
  }
  arr.push(g.toString(16));
  if (g.toString(16).split("").length == 1) {
    arr.push("0", g.toString(16));
  }
  arr.push(b.toString(16));
  if (b.toString(16).split("").length == 1) {
    arr.push("0", b.toString(16));
  }

  return arr;
}
console.log(colorOf(255, 0, 0)); //, "#ff0000");
//showColor("#ff0000")
console.log(colorOf(0, 111, 0)); //, "#006f00");
//showColor("#006f00")
console.log(colorOf(1, 2, 3)); //, "#010203");
//showColor("#010203")

//String repeat
function repeatStr(n, s) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(s);
  }
  return arr.join("");
}

console.log(repeatStr(3, "*")); //, "***");
console.log(repeatStr(5, "#")); //, "#####");
console.log(repeatStr(2, "ha ")); //, "ha ha ");

function bmi(weight, height) {
  let bmi = weight * height * height;
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}
console.log(bmi(80, 1.8)); //, "Normal");

function calculator(a, b, sign) {
  if (sign == "+") {
    return a + b;
  }
  if (sign == "-") {
    return a - b;
  }
  if (sign == "*") {
    return a * b;
  }
  if (sign == "/") {
    return a / b;
  }
  if (typeof a == "string" || typeof b == "string") {
    return "unknown value";
  }
  if (sign !== "+" || sign !== "-" || sign !== "*" || sign !== "/") {
    return "unknown value";
  }
}
console.log(calculator(1, 2, "+")); //, 3, "calculate");
console.log(calculator(1, 2, "-")); //, -1, "calculate");
console.log(calculator(3, 5, "*")); //, 15, "calculate");
console.log(calculator(6, 2, "/")); //, 3, "calculate");
console.log(calculator(6, 2, "$")); //, "unknown value", "calculate");
console.log(calculator(6, "h", "*")); //, "unknown value", "calculate");

function switchItUp(number) {
  if (number == 0) {
    return "zero";
  } else if (number == 1) {
    return "one";
  } else if (number == 2) {
    return "two";
  } else if (number == 3) {
    return "three";
  } else if (number == 4) {
    return "four";
  } else if (number == 5) {
    return "five";
  } else if (number == 6) {
    return "six";
  } else if (number == 7) {
    return "seven";
  } else if (number == 8) {
    return "eight";
  } else if (number == 9) {
    return "nine";
  }
}

function position(letter) {
  //let alf = "abcdefghijklmnopqrstuvwxyz";
  let arr = "abcdefghijklmnopqrstuvwxyz".split("").indexOf(letter) + 1;
  return "Position of alphabet: " + arr;
}
console.log(position("a")); //,"Position of alphabet: 1");
console.log(position("z")); //,"Position of alphabet: 26");
console.log(position("e")); //,"Position of alphabet: 5");

/* let alf = "abcdefghijklmnopqrstuvwxyz";
let arr =
  alf.split("")
  return  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].indexOf(letter)
console.log(arr); */

function arrayPlusArray(arr1, arr2) {
  let arr = arr1.concat(arr2);
  return arr.reduce((sum, el) => sum + el, 0);
}
//console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
//Even numbers in an array
function evenNumbers(array, number) {
  let marr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      marr.push(array[i]);
    }
  }
  return marr.slice(-number);
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //, [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); //, [-8, 26]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); //, [6]);

//getNames()
function getNames(data) {
  return data.map(function (item) {
    return item.name;
  });
}

//JavaScript Array Filter
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((el) => {
    return el % 2 == 0;
  });
}
console.log(getEvenNumbers([1, 2, 3, 6, 8, 10])); //, [2,6,8,10])
console.log(getEvenNumbers([1, 2])); //, [2]))
console.log(getEvenNumbers([12, 14, 15])); //, [12,14])
console.log(getEvenNumbers([13, 15])); //, [])
console.log(getEvenNumbers([1, 3, 9])); //, [])

//Reversed Words
function reverseWords(str) {
  let arr = str.split(" ");
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    ret.unshift(arr[i]);
  }
  return ret.join(" ");
}
console.log(reverseWords("hello world!")); //, "world! hello")
console.log(reverseWords("yoda doesn't speak like this")); //,  "this like speak doesn't yoda")
console.log(reverseWords("foobar")); //,  "foobar")
console.log(reverseWords("kata editor")); //,  "editor kata")
console.log(reverseWords("row row row your boat")); //,  "boat your row row row")

//Reversed Strings
function solution(str) {
  return str.split("").reverse().join("");
}

function getSum(a, b) {
  //Good luck!
  let arr = [];
  if (a == b) {
    return a;
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      arr.push(i);
    }
    return arr.reduce((sum, el) => {
      return sum + el;
    }, 0);
  }
  if (a < b) {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr.reduce((sum, el) => {
      return sum + el;
    }, 0);
  }
}
console.log(getSum(0, -1)); //,-1);
console.log(getSum(221, -313)); //,1);
