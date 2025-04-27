import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import VendorPortal from './pages/VendorPortal';
import AdminPortal from './pages/AdminPortal';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/vendor" element={<VendorPortal />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
