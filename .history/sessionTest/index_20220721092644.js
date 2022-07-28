const a = { b: 0 };

Object.defineProperties(a, "newProperty", {
  get() {
    return this.b + 1;
  },
});

console.log(a.newProperty);
