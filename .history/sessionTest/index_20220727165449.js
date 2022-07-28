

const name ={
  firstName: "thanh son",
  lastName: "nguyen"
}

const formatName = (name) =>{
  return (`hello ${name.firstName} + ${name.lastName}`)
} 

const el = ()=>{
return (<h1>formatName(name)</h1>)
}

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(el)