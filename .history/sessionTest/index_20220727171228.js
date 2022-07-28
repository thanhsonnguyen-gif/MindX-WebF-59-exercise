
function formatName (name) {
  return name.firstName +''+ name.lastName;
};

const user = {
  firstName: "thanh son",
  lastName: "nguyen",
};


const el = (<h1>{formatName(user)}</h1>) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(el);
