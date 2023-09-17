
import React from 'react';
import NavbarComponent from './NavbarComponent';
import ProductsComponent from './ProductsComponent';
import FooterComponent from './FooterComponent'
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <NavbarComponent />
      <ProductsComponent />
      <div className='foot'>
      <FooterComponent/>
      <footer>Copyright 2022 All Right Reserved By SG</footer>
      </div>
    </div>
  );
}

export default App;
