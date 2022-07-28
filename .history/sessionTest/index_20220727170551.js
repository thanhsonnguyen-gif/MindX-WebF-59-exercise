function formatName (al) {
  return al.firstName + al.lastName;
};

const name = {
  firstName: "thanh son",
  lastName: "nguyen",
};

const el = (<h1>{formatName(name)}</h1>) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<el />);
