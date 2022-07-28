const checkNameLover = (...lover) =>
  lover.findIndex((el) => el === "Huong") !== -1;

console.log(checkNameLover(["Phuong", "Huong", "Nhung"]));
