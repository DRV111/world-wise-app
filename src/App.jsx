import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>LIST</p>} />
          <Route path="cities" element={<p>List of cities</p>} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
