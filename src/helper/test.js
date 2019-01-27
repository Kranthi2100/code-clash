const _ = require('lodash');
const chalk = require('chalk');

function test(func, args, expected_result) {
  if(typeof func !== 'function') throw new Error('expecting func');
  if(!(args instanceof Array)) throw new Error('expecting array');
  const _result = func.apply(this, args);
  console.log(chalk.blue('running test case:', args, 'result', _result));
  if (_.isEqual(expected_result, _result))
    console.log(chalk.green('text passed for test case'));
  else
    console.log(chalk.red('test failed expecting', expected_result));
}

function runTests(arr, func) {
  if (!(arr instanceof Array)) throw new Error('expecting array');
  if (typeof func !== 'function') throw new Error('expecting func');
  arr.forEach(([_args, result]) => test(func, _args, result));
}

module.exports = {
  runTests: runTests
}