const math = require('mathjs');

const bigmath = math.create({
  number: 'BigNumber',  // Choose 'number' (default), 'BigNumber', or 'Fraction'
  precision: 32      // 64 by default, only applicable for BigNumbers
});


function printNumber(value, precision = 10) {
  return bigmath.format(
    Number(value),
    {notation: 'fixed', precision: precision}
  );
}

function formatPrecision(value, precision = 8) {
  let val;
  if (typeof value === 'number') {
    val = value.toString();
  } else if (typeof value === 'string') {
    val = value;
  }

  let index = val.indexOf('.');
  let result;
  if (index > -1) {
    result = val.substring(0, val.indexOf('.') + precision + 1); //直接截取precision位小数
  } else {
    result = val;
  }
  return printNumber(result, precision);
}


module.exports = {
  formatPrecision,
  bigmath,
  printNumber
};
