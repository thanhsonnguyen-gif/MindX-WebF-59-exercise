const a = {
  set pushName(newName) {
    this.arr.push(newName);
  },
  arr: [],
};

a.pushName = "mama"
a.pushName = "papa"
console.log(a.arr);
