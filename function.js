/**
 * @function calculateRectangleArea
 * @summary Calculates the area of a rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @returns {number} The calculated area (width * length).
 */
const calculateRectangleArea = function(width, length) {
    return width * length;
};
console.log(calculateRectangleArea(10, 5)); // Output: 50

/**
 * @function getFirstElement
 * @summary Retrieves the first element of an array, if it exists.
 * @param {Array} array - The input array.
 * @returns {any | null} The first element, or null if the array is empty.
 */
const getFirstElement = function(array) {
    if (array && array.length > 0) {
        return array[0];
    } else {
        return null;
    }
};
console.log(getFirstElement([1, 2, 3])); // Output: 1
console.log(getFirstElement([])); // Output: null

/**
 * @function getPersonInfo
 * @summary Formats a person's information into a readable string.
 * @param {object} person - An object with 'firstName', 'lastName', and 'age' properties.
 * @returns {string} A string combining the person's full name and age.
 */
const getPersonInfo = function(person) {
    return `${person.firstName} ${person.lastName} is ${person.age} years old.`;
};
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(getPersonInfo(person)); // Output: John Doe is 30 years old.

/**
 * @function addNewHires
 * @summary Merges two arrays of team members into a single new array.
 * @param {Array<string>} currentTeam - An array of current team members.
 * @param {Array<string>} newHires - An array of new recruits.
 * @returns {Array<string>} A new array containing all members from both input arrays.
 */
const addNewHires = (currentTeam, newHires) => {
    return [...currentTeam, ...newHires];
};
const currentDev = ["Alice", "Bob", "Bruce"];
const newRecruits = ["Charlie", "Daniel"];
const updatedTeam = addNewHires(currentDev, newRecruits);
console.log(updatedTeam.join(', ')); // Output: Alice, Bob, Bruce, Charlie, Daniel

/**
 * @function addNumbers
 * @summary Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of 'a' and 'b'.
 */
const addNumbers = (a, b) => {
    return a + b;
};
console.log(addNumbers(14, 12)); // Output: 26

/**
 * @function isEven
 * @summary Checks if a number is even.
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
const isEven = (number) => {
    return (number % 2 === 0);
};
console.log(isEven(18)); // Output: true
console.log(isEven(17)); // Output: false

/**
 * @function greetUser
 * @summary Creates a greeting message for a user.
 * @param {string} name - The name of the user.
 * @returns {string} A greeting message.
 */
const greetUser = (name) => {
    return `Hello, ${name}`;
};
console.log(greetUser('Bryce')); // Output: Hello, Bryce

/**
 * @function findLargest
 * @summary Finds the largest number in an array.
 * @param {Array<number>} array - An array of numbers.
 * @returns {number} The largest number in the array.
 */
const findLargest = (array) => {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
};
console.log(findLargest([1, 4, 2, 3])); // Output: 4
console.log(findLargest([-10, -5, -2])); // Output: -2

/**
 * @function reverseArray
 * @summary Reverses the order of elements in an array without using the built-in .reverse() method.
 * @param {Array} array - The input array.
 * @returns {Array} A new array with elements in reverse order.
 */
const reverseArray = (array) => {
    const newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};
console.log(reverseArray([2, 4, 6, 8, 10])); // Output: [10, 8, 6, 4, 2]

/**
 * @function filterEvenNumbers
 * @summary Filters an array to return only the even numbers.
 * @param {Array<number>} array - The array to filter.
 * @returns {Array<number>} A new array containing only the even numbers.
 */
const array = [5, 4, 18, 21, 24];
const filterEvenNumbers = array.filter(number => {
    return number % 2 === 0;
});
console.log(filterEvenNumbers); // Output: [4, 18, 24]

/**
 * @function sumArray
 * @summary Calculates the sum of all numbers in an array using the reduce method.
 * @param {Array<number>} additionArray - The array of numbers to sum.
 * @returns {number} The total sum of all numbers.
 */
const additionArray = [15, 25, 25, 14];
const sumArray = additionArray.reduce((sum, currentValue) => {
    return sum + currentValue;
}, 0);
console.log(sumArray); // Output: 79

/**
 * @function getFullName
 * @summary Retrieves the full name of a specific team member from a project team object.
 * @param {object} projectObj - An object with a `members` array.
 * @param {number} index - The index of the member in the `members` array.
 * @returns {string} The full name or a 'not found' message.
 */
const projectTeam = {
    projectName: 'Sharks',
    teamLead: 'Jane Doe',
    members: [
        {
            firstName: 'Bryce',
            lastName: 'Woodland'
        },
        {
            firstName: 'Alice',
            lastName: 'Smith'
        },
        {
            firstName: 'Bob',
            lastName: 'Johnson'
        }
    ]
};

const getFullName = (projectObj, index) => {
    const member = projectObj.members[index];
    if (member) {
        return `${member.firstName} ${member.lastName}`;
    }
    return 'Member not found.';
};
console.log(getFullName(projectTeam, 0)); // Output: Bryce Woodland