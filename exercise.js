const peopleOnZoom = ['Oscar', 'Whitney', 'Ron', 'Hodan', 'Anna'];

const fourthPersonInArray = peopleOnZoom[1];

// index is the position of a value in an array
// index of 0 = first position
// in our peopleOnZoom array, Oscar is at the index of 0, Whitney is at the index of 1, etc

const oneZoomUser = {
  name: 'Whitney',
  location: 'Dallas',
  age: 35,
};

const whitneysAge = oneZoomUser.age; // prints 35 to the console
const whitneysLocation = oneZoomUser.location; // prints Dallas to the console
const zoomUsersName = oneZoomUser.name;

// console.log(zoomUsersName);
// console.log(whitneysAge);

const zoomUserInfo = [
  {
    name: 'Whitney',
    location: 'Dallas',
    age: 35,
    pets: ['Gabby', 'Buck', 'Snaps'],
  },
  {
    name: 'Ron',
    location: 'Houston',
    age: 25,
  },
  252,
  'String',
  false,
  ['cat', 'dog', 'mouse'],
];

// console.log(zoomUserInfo[5][1], zoomUserInfo[0].age); // prints dog to the console

// print Whitney's cat's name to the console

// console.log(zoomUserInfo[0].pets[0]);

const employees = [
  {
    firstName: 'Michael',
    lastName: 'Jones',
    dateOfBirth: 1990,
    address: {
      line1: '201 Main St',
      line2: null,
      city: 'San Antonio',
      state: 'TX',
      zipCode: '77990',
    },
    hasCollegeDegree: true,
    dependents: ['daughter'],
  },
  {
    firstName: 'Sandra',
    lastName: 'Green',
    dateOfBirth: 1975,
    address: {
      line1: '505 L St',
      line2: 'Apt 3A',
      city: 'Austin',
      state: 'TX',
      zipCode: '77101',
    },
    hasCollegeDegree: true,
    dependents: ['mother-in-law', 'daughter', 'son'],
  },
  {
    firstName: 'Jonathan',
    lastName: 'Ruiz',
    dateOfBirth: 1985,
    address: {
      line1: '7550 Barn Ave',
      line2: null,
      city: 'San Antonio',
      state: 'TX',
      zipCode: '77990',
    },
    hasCollegeDegree: false,
    dependents: [],
  },
  {
    firstName: 'Mary',
    lastName: 'Berry',
    dateOfBirth: 1965,
    address: {
      line1: '12 4th St',
      line2: '#505',
      city: 'Houston',
      state: 'TX',
      zipCode: '77494',
    },
    hasCollegeDegree: true,
    dependents: ['son'],
  },
];

// print to console Mary Berry's address
// print to console Sandra Green's dependents
// what data type is `hasCollegeDegree`
// what data structure is `address`
// what data structure is `zipCode`
// what data structure is `dependents`

console.log(employees[3].address);
console.log(employees[1].dependents);
// Boolean
// Object
// String
// Array
