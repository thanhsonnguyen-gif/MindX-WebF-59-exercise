const obj = {
  log: ["a", 4, "c"],
  get elSecond() {
    return this.log[this.log.length - 2];
  },
};

console.log(obj.elSecond);
