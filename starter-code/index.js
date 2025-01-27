class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length;
    this.items.sort((a,b) => a - b)
  }
  get(pos) {
    return this.items[pos - 1]
  }
  max() {
    if (!this.length == 0) {
      return Math.max(...this.items)
    } else {
      throw new Error ("EmptySortedList")
    }
  }
  min() {
    if (!this.length == 0) {
      return Math.min(...this.items)
    } else {
      throw new Error ("EmptySortedList")
    }
  }
  average() {
    if (!this.length == 0) {
      return this.sum()/this.length
    } else {
      throw new Error ("EmptySortedList")
    }
  }
  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }
};

// const newSortedList = new SortedList;

module.exports = SortedList;
