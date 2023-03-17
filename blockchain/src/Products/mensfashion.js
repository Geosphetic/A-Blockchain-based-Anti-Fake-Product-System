import React from 'react';
import './style.css';

export default function MenProducts() {
  const products = [
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 6999.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 4444.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 1",
      image: "https://dolpo.com.np/wp-content/uploads/2022/01/IMG_7419-scaled.jpeg",
      description: "The North Face Dolpo jacket for men.",
      price: 179.99,
      quantity: 100
    },
  ];

  const addToCart = () => {
    window.location.href = "https://www.esewa.com.np/";
  }

  const Redirect =() => {
    window.location.href = "";
  }

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <a href=""><img className="image" src={product.image} onclick={Redirect} alt={product.name} /></a>
          <h2>{product.name}</h2>
          <p>"{product.description}"</p>
          <p1>Rs. {product.price.toFixed(2)}</p1>
          <br></br>
          <button class="button" onClick={addToCart}>Add to Cart</button>
          <br></br>
          <p6>-----------------------------------------------------------------------------------------------------</p6>
        </div>
      ))}
    </div>
  );
}
