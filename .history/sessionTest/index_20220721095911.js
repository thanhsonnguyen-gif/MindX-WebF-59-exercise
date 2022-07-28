let a = {
  b: 0,
};

a = {
  b(num) {
    return this.b + num;
  },
};

a.b = 3;

console.log(a);
