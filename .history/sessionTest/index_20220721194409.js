const checkNameLover = (...lover) => {
  const result =
    lover.findIndex((el) => {
      el === "Huong";
    }) !== -1;
  return result;
};

console.log(checkNameLover(["Phuong", "Huong", "Nhung"]));
