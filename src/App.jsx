import React from "react";
import "./App.css";
import {useNavigate}from "react-router-dom"
const products = [
  {
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "-30%",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    new: "New",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80",
  },
];

function App() {
  const navigate=useNavigate();
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>△</span> Furniro
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-icons">
          <span>♙</span>
          <span>⌕</span>
          <span>♡</span>
          <span>🛒</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Shop</h1>
        <p>Home &gt; Shop</p>
      </section>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div>
          <span>☰</span>
          <span>Filter</span>
          <span>▦</span>
          <span>Showing 1–16 of 32 results</span>
        </div>

        <div className="sort">
          <span>Show</span>
          <button>16</button>

          <span>Sort by</span>
          <button>Default</button>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="products">
        {products.concat(products, products, products).map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />

              {product.discount && (
                <span className="badge discount">{product.discount}</span>
              )}

              {product.new && (
                <span className="badge new">{product.new}</span>
              )}

              {index === 1 && (
                <div className="overlay">
                  <button>Add to cart</button>

                  <div className="actions">
                    <span>↗ Share</span>
                    <span>⇄ Compare</span>
                    <span>♡ Like</span>
                  </div>
                </div>
              )}
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.desc}</p>

              <div className="price">
                <strong>{product.price}</strong>
                {product.oldPrice && (
                  <del>{product.oldPrice}</del>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PAGINATION */}
      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button className="next">Next</button>
      </div>
      {/*SHOW MORE*/}
      <div className="show-more-container">
        <button
          className="show-more"
          onClick={()=>navigate("/product")}>
          show more 
        </button>
      </div>

      {/* FEATURES */}
      <section className="features">
        <div>
          <span>🏆</span>
          <div>
            <h3>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>

        <div>
          <span>◉</span>
          <div>
            <h3>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>

        <div>
          <span>▣</span>
          <div>
            <h3>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>

        <div>
          <span>◉</span>
          <div>
            <h3>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <h2>Furniro.</h2>
          <p>
            400 University Drive Suite 200 Coral
            <br />
            Gables, FL 33134 USA
          </p>
        </div>

        <div>
          <h4>Links</h4>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="#">Payment Options</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policies</a>
        </div>

        <div>
          <h4>Newsletter</h4>
          <div className="newsletter">
            <input placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </footer>

      <div className="copyright">
        2023 Furniro. All rights reserved
      </div>
    </div>
  );
}

export default App;