const checkNameLover = (...lover) =>
  lover.findIndex(el => el === "Trang") !== -1;

console.log(checkNameLover(["Phuong", "Huong", "Nhung"]));
