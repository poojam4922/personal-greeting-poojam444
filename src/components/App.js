
import React from "react";
import './../styles/App.css';

const App = () => {
  const[name, setName] = useState("")
  const handlename =(e) =>{
    setName(e.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name:</label>
        <input type="text" value ={name}  onChange={handlename}/>
        <p> {name} </p>
    </div>
  )
}

export default App
