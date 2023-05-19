import React from 'react';
import './style.css';

export default function Groceries() {
  const products = [
    {
      name: "Vegetables",
      image: "https://www.bankrate.com/2020/08/01170557/How-to-save-money-on-groceries.jpeg?auto=webp&optimize=high&crop=16:9&width=912",
      description: "Fresh and Organic",
      price: 1000,
      quantity: 100
    },
    {
      name: "Liquid Items",
      image: "https://hips.hearstapps.com/hmg-prod/images/22-del-groceries-explainer-lead-copy-1676322615.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      description: "Original Quality",
      price: 299.99,
      quantity: 100
    },
    {
      name: "Healthy Items",
      image: "https://www.thedailymeal.com/img/gallery/groceries-with-surprisingly-long-shelf-lives/l-intro-1673976493.jpg",
      description: "25 Groceries With Surprisingly Long Shelf Lives",
      price: 399.99,
      quantity: 100
    },
    {
      name: "Dairy Milk Chocolates",
      image: "https://static-01.daraz.com.np/p/4afc3820cb547dd540413454a6eb8733.jpg",
      description: "Cadbury Dairy Milk Silk Combo (4 Flavorsof 60 gm)",
      price: 999.99,
      quantity: 100
    },
    {
      name: "Chocolates",
      image: "https://static-01.daraz.com.np/p/4afc3820cb547dd540413454a6eb8733.jpg",
      description: "Cadbury Dairy Milk Silk Combo (4 Flavorsof 60 gm)",
      price: 999.99,
      quantity: 100
    },
    {
      name: "Current Kurkure",
      image: "https://www.yashodafoods.com.np/images/features-ic-24.png",
      description: "Hot and Spicy",
      price: 49.99,
      quantity: 100
    },
  ];

  const addToCart = () => {
    window.open('https://www.esewa.com.np/', '_blank');
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
