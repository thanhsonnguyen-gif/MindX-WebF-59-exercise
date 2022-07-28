const nameOfPro = "hello";

const a = {
  get [nameOfPro]() {
    return "hello word";
  },
};

console.log(a.hello);
