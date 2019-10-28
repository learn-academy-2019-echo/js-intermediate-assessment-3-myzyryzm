// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

function getFib(numOfFib){
  if(numOfFib === 0){
    return [0]
  }
  let fibArray = [];
  for(let i = 0; i < numOfFib; i++){
    if(i === 0 || i === 1){
      fibArray.push(1);
    }
    else{
      let nuNum = 0;
      for(let j = i-2; j < i; j++){
        nuNum += fibArray[j];
      }
      fibArray.push(nuNum);
    }
  }
  return fibArray;
}

console.log(getFib(10));

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

function oddChecker(arr){
  return arr.filter(value => typeof value === "number" & value % 2 !== 0)
}

console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

function reverseArray(arr){
  return arr.reverse();
}

console.log(reverseArray(originalArray1))
console.log(reverseArray(originalArray2))

// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

function multTwo(arr){
  return arr.map(value => value * 2);
}

// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

function letterCounter(str, letter){
  let num = 0;
  for(let i = 0; i < str.length; i++ ){
    if(str.charAt(i).toLowerCase() === letter.toLowerCase()){
      num++;
    }
  }
  return num;
}

console.log(letterCounter(ourString, "l"));

// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

function getMiddleLetter(str){
  if(str.length %2 === 0){
    let dex = str.length / 2;
    return str.charAt(dex - 1) + str.charAt(dex);
  }
  else{
    let dex = (str.length - 1)/2;
    return str.charAt(dex);
  }
}

console.log(getMiddleLetter(middleLetters1));
console.log(getMiddleLetter(middleLetters2));

// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
  constructor(radius){
    this.radius = radius;
  }
  area () {
    return this.radius * this.radius * Math.PI * 4;
  }
}

let sphere1 = new Sphere(1);
let sphere2 = new Sphere(5);
let sphere3 = new Sphere(10);

console.log(sphere1.area());
console.log(sphere2.area());
console.log(sphere3.area());

// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

const {doors, transmission} = myCar.specs;

console.log(doors);
console.log(transmission);

// 10. STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

function accumulateSum(arr){
  if(arr.length === 0){
    return [];
  }
  let nuArr = [];
  for(let i = 0; i < arr.length; i++){
    const v = arr[i];
    if(typeof v === "number"){
      if(i === 0){
        nuArr.push(v);
      }
      else{
        let sum = v + nuArr[nuArr.length - 1];
        nuArr.push(sum)
      }
    }
  }
  return nuArr;
}

console.log(accumulateSum(numbersToAdd1));
console.log(accumulateSum(numbersToAdd2));
console.log(accumulateSum(numbersToAdd3));