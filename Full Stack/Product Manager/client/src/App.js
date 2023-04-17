import './App.css';
import { Routes, Route} from 'react-router-dom';
import Products from './views/Products';
import Product from './views/OneProduct'
import UpdatePage from './views/UpdateProduct';


function App() {
  return (
    <div>
      <h1>Product Manager</h1>

      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/products/:id" element={<Product />}  />
        <Route path="/products/:id/edit" element={<UpdatePage />}  />
      </Routes>
    </div>
  );
}

export default App;
