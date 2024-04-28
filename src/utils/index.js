const utils = {
    // 1. Check if a value is an array
    isArray: (value) => Array.isArray(value),
  
    // 2. Check if a value is an object
    isObject: (value) => typeof value === 'object' && !Array.isArray(value),
  
    // 3. Check if a value is a function
    isFunction: (value) => typeof value === 'function',
  
    // 4. Check if a value is a string
    isString: (value) => typeof value === 'string',
  
    // 5. Check if a value is a number
    isNumber: (value) => typeof value === 'number' && !isNaN(value),
  
    // 6. Check if a value is undefined
    isUndefined: (value) => typeof value === 'undefined',
  
    // 7. Check if a value is null
    isNull: (value) => value === null,
  
    // 8. Check if a value is a boolean
    isBoolean: (value) => typeof value === 'boolean',
  
    // 9. Check if a value is empty
    isEmpty: (value) => {
      if (value === null || value === undefined) return true;
      if (utils.isArray(value) || utils.isString(value)) return value.length === 0;
      if (utils.isObject(value)) return Object.keys(value).length === 0;
      return false;
    },
  
    // 10. Clone an object
    cloneObject: (obj) => JSON.parse(JSON.stringify(obj)),
  
    // 11. Get the current timestamp
    getCurrentTimestamp: () => Date.now(),
  
    // 12. Capitalize the first letter of a string
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  
    // 13. Generate a random integer within a range
    getRandomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  
    // 14. Convert a string to lowercase
    toLowerCase: (str) => str.toLowerCase(),
  
    // 15. Convert a string to uppercase
    toUpperCase: (str) => str.toUpperCase(),
  
    // 16. Calculate the factorial of a number
    factorial: (n) => {
      if (n === 0 || n === 1) return 1;
      return n * utils.factorial(n - 1);
    },
  
    // 17. Check if a value is within a range
    isInRange: (value, min, max) => value >= min && value <= max,
  
    // 18. Generate a UUID
    generateUUID: () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
  
    // 19. Get the difference between two dates in days
    getDateDiffInDays: (date1, date2) => {
      const diffInMs = Math.abs(date2 - date1);
      return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    },
  
    // 20. Shuffle an array
    shuffleArray: (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  };
  
  module.exports = utils;