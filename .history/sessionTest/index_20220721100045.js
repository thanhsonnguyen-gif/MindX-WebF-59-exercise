let a = {
  b: 1,
};

a = {
  c(num) {
    return this.b + num;
  },
};

a.c = 3;

console.log(a);
