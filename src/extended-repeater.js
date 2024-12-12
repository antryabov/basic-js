const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

  if (!options.repeatTimes && !options.additionRepeatTimes) {
    result += str + options.addition;
  }

  for (let i = 0; i < options.repeatTimes; i += 1) {
    if (!options.addition && !options.additionSeparator && !options.separator) {
      if (i === options.repeatTimes - 1) {
        result += str;
      } else {
        result += str + '+';
      }
    } else if (
      !options.addition &&
      !options.additionSeparator &&
      options.separator
    ) {
      if (i === options.repeatTimes - 1) {
        result += str;
      } else {
        result += str + options.separator;
      }
    } else if (
      options.addition &&
      !options.additionSeparator &&
      options.separator
    ) {
      if (i === options.additionRepeatTimes - 1) {
        result += str;
      } else if (i === options.repeatTimes - 1) {
        result += options.addition;
      }
    } else if (
      options.addition &&
      options.additionSeparator &&
      options.separator
    ) {
      if (i === 0) {
        result += str;
      } else {
        result += options.addition + options.additionSeparator;
      }
    }
  }

  const copyResult = result;
  if (options.additionRepeatTimes && options.separator) {
    for (let j = 0; j <= options.additionRepeatTimes; j += 1) {
      result += options.separator + copyResult;
    }
  }

  return result;
}

module.exports = {
  repeater,
};
