const o = { a: 0 };

Object.defineProperty(o, "b", {
  get() {
    return 3;
  },
});

console.log(o.b);
