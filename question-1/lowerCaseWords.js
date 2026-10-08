// Question 1: ES6 Features
// Filters out non-strings from a mixed array and lower-cases the remaining words.
// Returns a promise: resolved with the new array, rejected if the input is not an array.

const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error('Input must be an array'));
            return;
        }

        const words = mixedArray
            .filter((item) => typeof item === 'string')
            .map((word) => word.toLowerCase());

        resolve(words);
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then((result) => console.log(result))
    .catch((err) => console.error(err.message));

module.exports = lowerCaseWords;
