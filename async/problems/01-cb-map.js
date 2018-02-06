'use strict';

const asyncMap = (list, cb) => {
  /*
  Write a function that, given a list of
  uninvoked asynchronous functions and a
  callback, calls back with *all* the collected
  results (and immediately calls back with an error
  if an error occurs)
  */
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
