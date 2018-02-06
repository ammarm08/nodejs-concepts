'use strict';

const asyncMap = list => {
  return new Promise((resolve, reject) => {
    return Promise.all(list)
    .then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  });
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
