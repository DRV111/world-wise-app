import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './index.css';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import { CitiesContextProvider } from './context/CitiesContext';
import { AuthProvider } from './context/FakeAuthContext';

function App() {
  return (
    <AuthProvider>
      <CitiesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate to={'cities'} replace />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesContextProvider>
    </AuthProvider>
  );
}

export default App;
