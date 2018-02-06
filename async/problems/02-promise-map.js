'use strict';

const asyncMap = list => {
  /*
  Write a function that, given a list of
  unresolved Promises, resolves with *all* the collected
  results (and immediately rejects with an error
  if an error occurs)
  */
}

// SAMPLE USAGE
const fs = require('fs');
const read = fname => {
  return new Promise((resolve, reject) => {
    fs.readFile(fname, 'utf8', (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

const LIST = [ read('../f1'), read('../f2') ];
asyncMap(LIST)
.then(res => console.log(res))
.catch(err => console.error(err));
