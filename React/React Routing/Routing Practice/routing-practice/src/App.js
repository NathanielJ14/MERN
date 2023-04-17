import React from "react";
import { useParams } from "react-router";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


const Home = () => {
  return (
    <div>
      <h1 style={{ color: "black"}}>Welcome</h1>
    </div>
  );
}

const Input = () => { 
  const { input, color1, color2 } = useParams();

  if (isNaN(input)) {
    return <h1 style={{color: color1, backgroundColor: color2}} >The word is: {input} </h1>;
  }

  return (
    <h1>The Number is: { input }</h1>
  );
}






function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:input" element={<Input/>} />
        <Route path="/:input/:color1/:color2" element={<Input/>} />
      </Routes>
    </div>
  );
}

export default App
