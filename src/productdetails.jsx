import React from "react";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";

const relatedProducts = [
  {
    name: "Syltherine",
    type: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/images/chair1.jpg",
  },
  {
    name: "Levi̇osa",
    type: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/images/chair2.jpg",
  },
  {
    name: "Lolito",
    type: "Luxury big sofa",
    price: "Rp 7.000.000",
    image: "/images/sofa.jpg",
  },
  {
    name: "Respira",
    type: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "/images/table.jpg",
  },
];

function ProductDetails() {
    const navigate=useNavigate();
  return (
    <div className="product-page">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span>△</span> Furniro
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>

        <div className="nav-icons">
          <span>♙</span>
          <span>⌕</span>
          <span>♡</span>
          <span>🛒</span>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        Home <span>›</span> Shop <span>›</span>
        <b> Asgaard sofa</b>
      </div>

      {/* PRODUCT SECTION */}
      <section className="product-section">

        {/* LEFT SIDE */}
        <div className="product-images">

          <div className="thumbnails">
            <img src="/images/sofa-main.jpg" alt="sofa" />
            <img src="/images/sofa-side.jpg" alt="sofa" />
            <img src="/images/sofa-front.jpg" alt="sofa" />
            <img src="/images/sofa-back.jpg" alt="sofa" />
          </div>

          <div className="main-image">
            <img src="/images/asgaard-sofa.jpg" alt="Asgaard sofa" />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="product-info">

          <h1>Asgaard sofa</h1>

          <h3>Rs. 250,000.00</h3>

          <div className="rating">
            <span>★ ★ ★ ★ ★</span>
            <small>5 Customer Review</small>
          </div>

          <p className="description">
            Setting the bar as one of the loudest speakers in its class,
            Klipsch is a compact, short horn speaker with a big sound.
            Which boasts a clear midrange and extended highs for a smooth,
            detailed sound.
          </p>

          <div className="option">
            <label>Size</label>
            <div className="sizes">
              <button>L</button>
              <button>XL</button>
              <button>XS</button>
            </div>
          </div>

          <div className="option">
            <label>Color</label>
            <div className="colors">
              <span className="purple"></span>
              <span className="black"></span>
              <span className="gold"></span>
            </div>
          </div>

          <div className="cart-row">

            <div className="quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="add-cart">
              Add To Cart
            </button>

            <button className="compare">
              + Compare
            </button>

          </div>

          <hr />

          <div className="product-meta">
            <p>SKU <span>SS001</span></p>
            <p>Category <span>Sofas</span></p>
            <p>Tags <span>Sofa, Chair, Home, Shop</span></p>
            <p>Share <span>● ● ●</span></p>
          </div>

        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="description-section">

        <div className="tabs">
          <button className="active">Description</button>
          <button>Additional Information</button>
          <button>Reviews [5]</button>
        </div>

        <div className="description-text">
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and
            sound of Marshall, plus the freedom of a product.
          </p>

          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, short horn
            speaker with a big sound.
          </p>
        </div>

        <div className="description-images">
          <img src="/images/sofa-desc1.jpg" alt="sofa" />
          <img src="/images/sofa-desc2.jpg" alt="sofa" />
        </div>

      </section>

      {/* RELATED PRODUCTS */}
      <section className="related-section">

        <h2>Related Products</h2>

        <div className="related-products">

          {relatedProducts.map((product, index) => (
            <div className="related-card" key={index}>

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p>{product.type}</p>

              <strong>{product.price}</strong>

            </div>
          ))}

        </div>

        <button className="show-more"
        onClick={()=>navigate("/comparsion")}>
          Show More
        </button>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-column">
          <h2>Furniro.</h2>
          <p>
            400 University Drive Suite 200 Coral
            <br />
            Gables, FL 33134 USA
          </p>
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <a href="/">Payment Options</a>
          <a href="/">Returns</a>
          <a href="/">Privacy Policies</a>
        </div>

        <div className="footer-column newsletter">
          <h4>Newsletter</h4>
          <input
            type="email"
            placeholder="Enter Your Email Address"
          />
          <button>SUBSCRIBE</button>
        </div>

      </footer>

      <div className="copyright">
        2023 Furniro. All rights reserved
      </div>

    </div>
  );
}

export default ProductDetails;