'use strict';

const asyncMap = list => {
  const src = list.slice();
  const res = [];

  const step = () => {
    return new Promise((resolve, reject) => {
      if (!src.length) {
        resolve(res);
      } else {
        const promise = src.shift();
        promise
        .then(data => {
          res.push(data);
          resolve(step());
        }).catch(err => {
          reject(err);
        });
      }
    });
  }
  
  return step();
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
