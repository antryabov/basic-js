const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],
  reverseResult: [],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result = [...this.result, value];
    // this.result.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 1 ||
      position > this.result.length
    ) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.result.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const finishResult = this.result
      .map((el) => {
        return `~~( ${el} )`;
      })
      .join('')
      .slice(2);
    this.result = [];
    return finishResult;
  },
};

module.exports = {
  chainMaker,
};
