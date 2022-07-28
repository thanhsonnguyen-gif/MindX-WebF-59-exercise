const infos = { name: "pa st", hobby: "React" };
function printInfos({ name, hobby }) {
  console.log(name, hobby);
}

const printName = ({name}) => console.log(name);
printName(infos);