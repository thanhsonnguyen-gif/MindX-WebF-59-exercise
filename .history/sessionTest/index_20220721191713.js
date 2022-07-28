const getInfos = (type) => {
  let inFo = [];
  let err = false;
  if (type === "job") {
    inFo = ["manager", "sales", "tech"];
  } else if (type === "lover") {
    inFo = ["Nhung", "Huong", "Phuong"];
  } else {
    err = true;
  }

  const addInfo = (newInfo) => {
    return inFo.push(newInfo);
  };

  return { inFo, err, addInfo };
};

const {
  inFo: nameLover,
  err: state,
  addInfo: newValueMaker,
} = getInfos("lover");
console.log(nameLover);
console.log(state);
newValueMaker("Ngan");
console.log(nameLover);
