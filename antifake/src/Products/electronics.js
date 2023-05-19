import React from 'react';
import './style.css';

export default function Electronics() {
  const products = [
    {
      name: "SSD  250 GB",
      image: "https://image-us.samsung.com/SamsungUS/home/computing/memory-and-storage/ssd/02262021/gallery/1tb/MZ-V8V250_001_Front_Black.jpg?$product-details-jpg$",
      description: " Genuine PCIe® 3.0 NVMe® speed (up to 2,900/1,300MB/s for read/write speed) and  Space-saving and compact  M.2 2280 form factor",
      price: 2999.99,
      quantity: 100
    },
    {
      name: "SSD 512 GB",
      image: "http://ugratarainfosys.com.np/wp-content/uploads/2021/04/Hikvision-512-GB-E100.jpg",
      description: " High R/W speed with SATA 3.0, Read Speed: 550MB/s,                Write Speed: 480MB/s, 3D NAND technology for for higher capacity, performance, and stability, Vibration resistant structure with electronic chip control for better data safety, Slim and portable: 2.5 Inch, 7 mm Thick",
      price: 10444.99,
      quantity: 100
    },
    {
      name: "CPU Cooler",
      image: "https://thermaltake-usa.azureedge.net/media/catalog/product/cache/d1c43f8770f36611c60914dc64260fbf/t/o/toughair510_01.jpg",
      description: "A single tower dual fan designed CPU cooler equipped with two optimized 120 mm high static pressure fan and a newly designed heat sink, guaranteeing its outstanding performance.",
      price: 6699.99,
      quantity: 100
    },
    {
      name: "CPU Cooler Blue",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6488/6488319_sd.jpg;maxHeight=640;maxWidth=550",
      description: "CORSAIR - iCUE H100i ELITE LCD Display Liquid CPU Cooler 120mm Fans + 240mm Radiator Liquid Cooling System + Custom IPS LCD Screen",
      price: 25900.99,
      quantity: 100
    },
    {
      name: "Mouse",
      image: "https://m.media-amazon.com/images/I/61XWAkgnTdL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      description: "TECKNET Wired Mouse, USB Wired Computer Mouse, 3600DPI 4 Adjustable Levels, 6-Button Ergonomic Mice, Home and Office Mouse for Laptop PC Desktop Notebook - Grey",
      price: 1099.99,
      quantity: 100
    },
    {
      name: "Gaming Mouse",
      image: "https://www.howtogeek.com/wp-content/uploads/2017/03/shutterstock_723052858.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1",
      description: "Smooth and More click buttons",
      price: 1999.99,
      quantity: 100
    },
    {
      name: "Gaming Keyboard",
      image: "https://static-01.daraz.com.np/p/44ecfd3b7d22f1a401140352fee88557.jpg",
      description: "CADEVE 9122 Rainbow Backlit Waterproof Multimedia Mechanical Gaming Keyboard And Mouse",
      price: 4099.99,
      quantity: 100
    },
    {
      name: "KEYBOARD",
      image: "https://itti.com.np/pub/media/catalog/product/cache/cf3f2243ef4940fd5c66f2ff035145ac/r/a/rapoo-v500-pro-budget-gaming-mechanical-keyboard-price-nepal-rgb-lighting.jpg",
      description: "Rapoo V500 Pro Mechanical Gaming RGB Keyboard - Individual Backlit Keys, Spill Resistant",
      price: 6999.99,
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
