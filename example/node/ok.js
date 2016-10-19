const foo = require('./import');

const assign = () => {
  const baz = Object.assign(foo('foo'), {
    baz: 'baz'
  });
  return baz;
};

const arr = [1, 2, 3, 4, 5, 6];
const double = arr.map(number => number * 2);
const defaultParams = (a = 'a', b = 'b') => ({a, b});

exports.assign = assign;
exports.double = double;
exports.defaultParams = defaultParams;

