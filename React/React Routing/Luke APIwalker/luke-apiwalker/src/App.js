import logo from './logo.svg';
import './App.css';
import HeaderForm from './components/HeaderForm';
import { Routes, Route } from 'react-router-dom';
import Planet from './views/Planet';
import People from './views/People';

function App() {
  return (
    <div>
      <HeaderForm/>

      <Routes>
        <Route path="/planet/:id" element={<Planet/>} />
        <Route path="/people/:id" element={<People/>} />
      </Routes>
    </div>
  );
}

export default App;
