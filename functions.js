// declaring functions 2 ways

function myGreeting() {
  console.log('Hello there');
}

const myOtherGreeting = () => {
  console.log('Hello from my fat arrow function!');
};

// invoking the functions (must have the name, and parentheses)

// myGreeting();

// myOtherGreeting();

function myPersonalizedGreeting(name) {
  console.log(`Hello there, ${name}`);
}

const myBffsName = 'Michael';

// myPersonalizedGreeting(myBffsName);

function madLibs(verb, pluralNoun) {
  console.log(`I ${verb} ${pluralNoun}`);
}

const myVerb = 'eat';
const myPluralNoun = 'pencils';

// madLibs(myVerb, myPluralNoun);

// Write a function that takes in a name, a location, and a subject, and returns:
// "My name is ____, I am from ____, and my favorite subject is _____!"

function aboutMe(name, location, subject) {
  return `My name is ${name}, I am from ${location}, and my favorite subject is ${subject}!`;
}

// console.log(aboutMe('Whitney', 'Colorado', 'Math'));

function aboutMePrint(name, location, subject) {
  console.log(
    `My name is ${name}, I am from ${location}, and my favorite subject is ${subject}!`
  );
}

// aboutMePrint('Whitney', 'Colorado', 'Math');

function addNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(addNumbers(1, 2));

// write 3 functions using return statements instead of console.logs.
// 1: write a function that takes in 2 numbers, and subtracts the second number from the first number
// 2: write a function that takes in 2 numbers, and multiplies them together
// 3: write a function that takes in 2 numbers, and divides the second number by the first number

// equality operator

//console.log(1 == '1'); // true
//console.log(1 === '1'); // false

// === is more strict than == because === checks the type in addition to the value

// ! "bang" - negates what it is before

// console.log('Whitney' != 'Oscar'); // true because Whitney is NOT equal to Oscar
// console.log('Whitney' == 'Oscar'); // false, because Whitney is NOT equal to Oscar

//console.log('TWO' == 'two'); // false

const tipAmount = (billAmount, tipPercentage) => {
  return (billAmount * tipPercentage) / 100;
};

console.log(tipAmount(100, 20));

const lengthOfArray = array => {
  return array.length;
};

console.log(lengthOfArray([1, 4, 6, 'yes']));

const threeFriends = (name1, name2, name3) => {
  let friendsArray = [];
  friendsArray.push(name1, name2, name3);
  return friendsArray;
};

console.log(threeFriends('Joe', 'Bob', 'Jerry'));

const aboutUser = userObject => {
  return `The user's name is ${userObject.name}, they're located in ${userObject.location}, and they love the color ${userObject.favoriteColor}!`;
};

const theUser = {
  name: 'Gabby',
  location: 'Fort Worth',
  favoriteColor: 'salmon pink',
};

console.log(aboutUser(theUser));

function lastIndex(arrayOfNums) {
  const lengthOfArray = arrayOfNums.length;
  return arrayOfNums[lengthOfArray - 1];
}

const numsArray = [1, 2, 5, 7, 4345, 66];
const numsArray2 = [1, 2, 5, 7, 4345, 6, 456, 567, 123, 7, 3, 5];

console.log(lastIndex(numsArray2));
