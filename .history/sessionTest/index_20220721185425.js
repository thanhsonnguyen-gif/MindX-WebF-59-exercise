const getSome = () => ["hello", "world"];
const [char1, char2, char3 = "log"] = getSome();
console.log(char1);
console.log(char2);
console.log(char3);
