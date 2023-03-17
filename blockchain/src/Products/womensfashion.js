import React from 'react';
import './style.css';

export default function WomenProducts() {
  const products = [
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
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
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 1",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc1c639520ca44039c32af6901303809_9366/ultraboost-light-running-shoes.jpg",
      description: "Adidas running shoe with mesh upper and comfortable cushioning.",
      price: 79.99,
      quantity: 100
    },

    // Add 98 more Adidas shoes and 98 more Dolpo jackets here...
  ];

  const addToCart = () => {
    window.location.href = "https://www.esewa.com.np/";
  }

  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <a href="/"><img className="image" src={product.image} alt={product.name} /></a>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p1>${product.price.toFixed(2)}</p1>
          <button class="button" onClick={addToCart}><em>Add to Cart</em></button>
          <br></br>
          <p6>-----------------------------------------------------------------------------------------------------</p6>
        </div>
      ))}
    </div>
  );
}
