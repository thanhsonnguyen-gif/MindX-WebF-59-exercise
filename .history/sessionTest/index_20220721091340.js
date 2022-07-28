const obj = {
  log: ["a", 4, "c"],
  get elSecond() {
    return this.log[-1];
  },
};

console.log(obj.elSecond);
