import React from 'react';
import './style.css';

export default function WomenProducts() {
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
      description: "The North-Face Dolpo Jacket for men..",
      price: 4444.99,
      quantity: 100
    },
    {
      name: "Sonam Jacket 1",
      image: "https://himalayastore.com.au/pub/media/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/u/r/urgyen_men_sonam-tex_jacket-1.jpg",
      description: "Urgyen Men Sonam-Tex Jacket: WARM and LIGHT WEIGHED Wind  Protector",
      price: 56999.99,
      quantity: 100
    },
    {
      name: " Adidas Shoe 2",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/782286762b444bca8784ad6b0089e850_9366/Run_70s_Shoes_White_GY3884_01_standard.jpg",
      description: "RETRO-INSPIRED SHOES MADE IN PART WITH RECYCLED MATERIALS.",
      price: 6999.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 3",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a3471630db964379874cade40140b16f_9366/Racer_TR21_Shoes_Black_GX0651_04_standard.jpg",
      description: "SPORT-INSPIRED SNEAKERS MADE IN PART WITH RECYCLED MATERIALS.",
      price: 6999.99,
      quantity: 100
    },
    {
      name: "Adidas Shoe 4",
      image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/67b00d8b31354bc5b24baf2a00aababb_9366/Runfalcon_3_Cloudfoam_Low_Running_Shoes_Blue_HQ1471_02_standard_hover.jpg",
      description: "CUSHIONED RUNNING SHOES MADE IN PART WITH RECYCLED MATERIALS.",
      price: 5979.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 2",
      image: "https://dolpo.com.np/wp-content/uploads/2022/03/IMG_7852-scaled.jpeg",
      description: "Gᴏʀᴇ-Tᴇx Jᴀᴄᴋᴇᴛ: Warm, lightweight and stylish at the same time, our “Gᴏʀᴇ-Tᴇx Jᴀᴄᴋᴇᴛ“ saves you from the cold keeping your fashion game updated.",
      price: 4999.99,
      quantity: 100
    },
    {
      name: "Dolpo Jacket 3",
      image: "https://dolpo.com.np/wp-content/uploads/2022/03/IMG_7379-600x600.jpeg",
      description: "Sᴜᴘᴇʀᴅᴏᴡɴ Jᴀᴄᴋᴇᴛ: Keeping warmth the prime factor, this Sᴜᴘᴇʀᴅᴏᴡɴ is able to keep you warm every hour. Having an amazing capacity to out-stand -14°C this Jacket is all you need this winter.",
      price: 6999.99,
      quantity: 100
    },
    {
      name: "Caliber Shoe 1",
      image: "https://calibershoes.sgp1.digitaloceanspaces.com/uploads/2022/12/02214943/824-Black-3.jpg",
      description: "Simple, natural, authentic & all about being comfortable defines our VORTEX 824",
      price: 6999.99,
      quantity: 100
    },
    {
      name: "Caliber Shoe 2",
      image: "https://calibershoes.sgp1.digitaloceanspaces.com/uploads/2023/01/03141427/123-Rainbow-1.jpg",
      description: "Authentic Natural Caliber Shoes Rainbow Sneakers For Juniors ( SCOOBY 123 )",
      price: 6999.99,
      quantity: 100
    },
    {
      name: "Nike Shoe 1",
      image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/de912060-923f-421b-950a-97527007af73/air-max-systm-older-shoes-S175cF.png",
      description: "Nike Air Max SYSTM",
      price: 6999.99,
      quantity: 100
    },
    {
      name: "Nike Shoe 2",
      image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8199b269-d037-4d65-8d6a-bf16a1f7a411/air-max-90-ltr-older-shoes-9xnt2B.png",
      description: "Nike Air Max 90 LTR",
      price: 6999.99,
      quantity: 100
    },
    {
      name: "Adidas T-Shirt",
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/841801ad2f544d5cbe92afc500f605f8_9366/Messi_Football_Goat_Graphic_T-Shirt_Black_IM7656_01_laydown.jpg",
      description: "A SOFT TEE THAT CELEBRATES THE GREATEST FOOTBALLER OF ALL TIME.",
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
