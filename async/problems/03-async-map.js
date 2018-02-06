'use strict';

const asyncMap = async (list) => {
  /*
  Using async-await, write a function that, given a list of
  unresolved Promises, resolves with *all* the collected
  results (and immediately rejects with an error
  if an error occurs).
  */
}

// SAMPLE USAGE
const read = require('util').promisify(require('fs').readFile);
const LIST = [ read('../f1', 'utf8'), read('../f2', 'utf8') ];

(async function () {
  try {
    const res = await asyncMap(LIST);
    console.log(res);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }

  process.exit();
})();
