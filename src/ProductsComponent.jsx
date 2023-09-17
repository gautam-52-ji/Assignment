import React, { useState, useEffect } from 'react';
import './ProductsComponent.css';
import vec from './assets/img/Group 19.png';
import ar from './assets/img/Arrow 1.png';
import ar2 from './assets/img/Arrow 2.png';
import second from './assets/img/Group 18.jpg'

const ProductsComponent = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // for the selected category
    const [currentIndex, setCurrentIndex] = useState(0); // for the carousel display index

    useEffect(() => {
        // Fetching categories
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => {
              setCategories(data);
              setSelectedCategory(data[0]);
          });
  

        // Fetching products
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
      <div className="products-container">
      <div className="header">
          <h2>New Products</h2>
          <div className="carousel-nav">
              <img src={ar2} className="prev-icon" onClick={() => setCurrentIndex(prev => Math.max(prev - 4, 0))} />
              <img src={ar} className="next-icon" onClick={() => setCurrentIndex(prev => prev + 4)} />
          </div>
      </div>
      <div className="svg-container">
          <img src={second} alt="" style={{ width: "168px" }} />
      </div>
      <div className="main-content">
      <div className="left-content">
    {categories.map(cat => (
        <div 
            key={cat} 
            className={`category-item ${selectedCategory === cat ? 'active-category' : ''}`} 
            onClick={() => setSelectedCategory(cat)} // set the clicked category as selected
        >
            {cat}
        </div>
    ))}
</div>
          <div className="right-content">
          <div className="carousel">
          <div className="carousel">
    {products.filter(product => !selectedCategory || product.category === selectedCategory)
        .slice(currentIndex, window.innerWidth <= 1024 ? currentIndex + 1 : currentIndex + 4)
        .map(product => (
            <div key={product.id} className="product-item">
                <img className='immg' src={product.image} alt={`Product ${product.title}`} />
                <img src={vec} className="up-arrow-icon"></img>
                <div className="name">{product.title}</div>
                <div className="desc">
                    {product.description.length > 100 ? product.description.slice(0, 100) + "..." : product.description}
                </div>
                <div className="price">${product.price}</div>
            </div>
    ))}
</div>


</div>
<div className="mobile-carousel-nav">
        <img src={ar2} className="prev-icon" onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))} />
        <img src={ar} className="next-icon" onClick={() => setCurrentIndex(prev => prev + 4)} />
    </div>
</div>
      </div>
  </div>
);
}

export default ProductsComponent;