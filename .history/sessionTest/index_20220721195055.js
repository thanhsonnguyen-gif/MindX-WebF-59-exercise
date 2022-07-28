const checkNameLover = (...lover) =>
  lover.findIndex(el => el === "Nhung") !== -1;

console.log(checkNameLover("Phuong", "Huong", "Nhung"));
