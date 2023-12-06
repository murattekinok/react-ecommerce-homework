import React from 'react';
import './App.css';

const products = [
  { name: 'Stylish Sneakers', category: 'Sneakers', price: 50, image: 'sneakers.png' },
  { name: 'Classic Boots', category: 'Boots', price: 59.99, image: 'boots.png' },
  { name: 'Casual Sandals', category: 'Sandals', price: 110, image: 'sandals.png' },
];

const App = () => {
  const displayProducts = (productsArray) => {
    return (
      <div id="gallery">
        {productsArray.map((product, index) => (
          <div key={index} className="product-card">
            <img src={`images/${product.image}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product.name, product.price)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };

  const addToCart = (productName, productPrice) => {
    // Sepet işlemleri burada gerçekleştirilebilir
    console.log(`${productName} added to cart. Price: $${productPrice}`);
  };

  return (
    <div className="App">
      <nav>
        <ul className="horizontal-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <h1>Product Gallery</h1>

      <a href="#" id="logo-container">
        <img src="images/logo.png" alt="Logo" id="logo" />
      </a>

      <div id="buttons">
        <button id="showAllButton" onClick={() => displayProducts(products)}>Show All</button>
        <button id="sneakersButton" onClick={() => displayProducts(products.filter(product => product.category === 'Sneakers'))}>Sneakers</button>
        <button id="bootsButton" onClick={() => displayProducts(products.filter(product => product.category === 'Boots'))}>Boots</button>
        <button id="sandalsButton" onClick={() => displayProducts(products.filter(product => product.category === 'Sandals'))}>Sandals</button>
        <button id="sortByNameButton" onClick={() => displayProducts([...products].sort((a, b) => a.name.localeCompare(b.name)))}>Sort by Name</button>
        <button id="sortByPriceButton" onClick={() => displayProducts([...products].sort((a, b) => a.price - b.price))}>Sort by Price</button>
      </div>

      <section className="content">
        <h2>Welcome to Our E-Commerce Website</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac feugiat purus...</p>

        <h3>Our Products</h3>
        <p>Check out our wide range of products. We offer the best quality and great deals on all items. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <h3>Why Choose Us?</h3>
        <p>We take pride in our excellent customer service and high-quality products. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada bibendum arcu, nec bibendum tortor cursus eu.</p>
      </section>

      {displayProducts(products)}

      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
