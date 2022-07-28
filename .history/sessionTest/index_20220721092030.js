const o = { a: 5 };

Object.defineProperty(o, "b", {
  get() {
    return this.a+1;
  },
});

console.log(o.b);
