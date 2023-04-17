import './App.css';
import { Routes, Route} from 'react-router-dom';
import Author from './views/Main'
import NewAuthor from './views/NewAuthor'
import EditAuthor from './views/EditAuthor';


function App() {
  return (
    <div>
      <h1>Favorite Authors:</h1>

      <Routes>
        <Route path="/" element={<Author/>} />
        <Route path="/new" element={<NewAuthor/>} />
        <Route path="/edit/:id" element={<EditAuthor/>} />
      </Routes>
    </div>
  );
}

export default App;
