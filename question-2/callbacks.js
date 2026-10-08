// Question 2: Promises
// Promise versions of the delayedSuccess / delayedException callbacks.

// Resolves with a success message after 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = { 'message': 'delayed success!' };
            resolve(success);
        }, 500);
    });
};

// Rejects with an error message after 500ms
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!');
            } catch (e) {
                reject({ 'error': 'delayed exception!' });
            }
        }, 500);
    });
};

// Call each promise separately and handle its result
resolvedPromise()
    .then((result) => console.log(result))
    .catch((err) => console.error(err));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
