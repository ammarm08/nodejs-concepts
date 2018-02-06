'use strict';

const asyncMap = async (list) => {
  try {
    const res = await Promise.all(list);
    return res;
  } catch (err) {
    return err;
  }
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
