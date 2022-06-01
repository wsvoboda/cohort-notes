// if statements

// if (condition) {
// }

// if condition is true, execute code in curly braces

const myAge = 35;

// if (myAge < 100) {
//   console.log('You are still young!'); // this code ran, because my age is less than 100
// }

// if (myAge < 21) {
//   console.log('You are a baby!'); // this code did not run, because my age is not less than 21
// }

const dayOfWeek = 'Tuesday';

// if (dayOfWeek == 'Friday') {
//   // checking if my variable is equal to "Friday", but it is NOT equal to "Friday"
//   console.log('Today is Friday!'); // so this code does not run
// } else {
//   // because the first condition was NOT true, the code in the else statement runs instead
//   console.log('Today is NOT Friday :('); // this code runs
// }

// if (dayOfWeek == 'Monday') {
//   console.log('Today is Monday!');
// } else if (dayOfWeek == 'Tuesday') {
//   console.log('Today is Tuesday!');
// } else if (dayOfWeek == 'Wednesday') {
//   console.log('Today is Wednesday');
// } else {
//   console.log('Today is not Monday, Tuesday, or Wednesday');
// }

// console.log(4 == '4'); // true
// console.log(4 === '4'); // false

// add if statement to tipAmount function (weekend exercise 1)

const tipAmount = (billAmount, tipPercentage) => {
  if (billAmount < 0) {
    // check first that billAmount passed in is positive, if it's negative, this code will run
    return 'ERROR! You must use a positive bill amount to use this function!';
  } else {
    return (billAmount * tipPercentage) / 100; // if the billAmount passed in is positive, this code will run
  }
};

// console.log(tipAmount(-100, 20)); // this will print the error message

function isNumberEvenOrOdd(num1) {
  if (num1 % 2 == 0) {
    // checks if a number is divisible by 2, with no remainder (it's even)
    return 'Number is even';
  } else {
    return 'Number is odd'; // if number is not even, it has to be odd
  }
}

// console.log(isNumberEvenOrOdd(15));

// write a function that checks a user's age
// if a user is under 18, return "You are not allowed to see this page"
// if a user is over 18, but under 21, return "You are allowed to see some of this page"
// if a user is over 21, return "You have full access to this page"

function userAge(age) {
  if (age < 18) {
    // check first if user is under 18
    return 'You are not allowed to see this page';
  } else if (age < 21) {
    // if the user is over 18, this condition is checked. If user is under 21, this code block is run
    return 'You are allowed to see some of this page';
  } else {
    // if user is over 18 AND 21, this code block runs
    return 'You have full access to this page';
  }
}

// console.log(userAge(12)); // returns "You are not allowed to see this page"
// console.log(userAge(20)); // returns "You are allowed to see some of this page"
// console.log(userAge(90)); // returns "You have full access to this page"

const myPassword = 'password123';

function checkPassword(password) {
  if (password.length == 0) {
    return 'Please enter a password';
  } else if (password === myPassword) {
    return 'Welcome, your password was correct';
  } else {
    return 'You may not enter, that password is incorrect';
  }
}

// console.log(checkPassword('password123'));

// For loops

// For loops execute blocks of code a number of times

// for (statement1; statement2; statement3) {
//   // block of code to execute
// }

// statement 1 - declaration that is executed once
// statement 2 - condition for executing the block of code
// statement 3 - runs after every loop

for (let i = 0; i < 10; i++) {
  // this will print numbers 0 to 9
  console.log(i);
}

for (let i = 10; i < 20; i++) {
  // this will print numbers 10 to 19
  console.log(i);
}

for (i = 0; i < 5; i++) {
  // some people forgo putting `let` inside the first statement, it still works
  console.log(i);
}

for (let i = 100; i > 90; i--) {
  // this will print numbers 100 to 91
  console.log(i);
}

// this for loop prints all even numbers between 1 and 20
for (i = 1; i < 21; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let emptyArray = [];

// add numbers 0 to 9 to an array

for (let i = 0; i < 10; i++) {
  emptyArray.push(i);
}

console.log(emptyArray);

const arrayOfFriends = ['Karen', 'George', 'Sam', 'Bob', 'Susan'];

// this for loop will print all elements of this array

for (let i = 0; i < arrayOfFriends.length; i++) {
  console.log(arrayOfFriends[i]);
}

// only print first 2 people in array

for (let i = 0; i < 2; i++) {
  console.log(arrayOfFriends[i]);
}
