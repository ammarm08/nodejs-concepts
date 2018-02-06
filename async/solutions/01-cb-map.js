'use strict';

const asyncMap = (list, cb) => {
  const src = list.slice();
  const res = [];

  const step = () => {
    if (!src.length) {
      cb(null, res);
    } else {
      const fn = src.shift();
      fn((err, results) => {
        if (err) {
          cb(err, null);
        } else {
          res.push(results);
          step();
        }
      });
    }
  }

  step();
}

// SAMPLE USAGE
const fs = require('fs');
const read = fname => {
  return cb => {
    fs.readFile(fname, 'utf8', cb);
  }
}

const LIST = [ read('../f1'), read('../f2') ];
asyncMap(LIST, (err, results) => {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
});
