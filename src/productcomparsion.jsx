import React from "react";
import "./App.css";

const products = [
  {
    name: "Asgaard Sofa",
    image: "/images/sofa1.png",
    price: "Rs. 250,000.00",
    rating: "4.7",
    reviews: "204 Reviews",
  },
  {
    name: "Outdoor Sofa Set",
    image: "/images/sofa2.png",
    price: "Rs. 224,000.00",
    rating: "4.2",
    reviews: "145 Reviews",
  },
];

const comparisonData = [
  {
    title: "General",
    rows: [
      ["Sales Package", "1 sectional sofa", "1 Three Seater, 2 Single seater"],
      ["Model Number", "TFCBLIGRBL6SRHS", "DTUBIGRBL568"],
      ["Secondary Material", "Solid Wood", "Solid Wood"],
      ["Configuration", "L-shaped", "L-shaped"],
      ["Upholstery Material", "Fabric + Cotton", "Fabric + Cotton"],
      ["Upholstery Color", "Bright Grey & Lion", "Bright Grey & Lion"],
    ],
  },
  {
    title: "Product",
    rows: [
      ["Filling Material", "Foam", "Matte"],
      ["Finish Type", "Bright Grey & Lion", "Bright Grey & Lion"],
      ["Adjustable Headrest", "No", "yes"],
      ["Maximum Load Capacity", "280 KG", "300 KG"],
      ["Origin of Manufacture", "India", "India"],
    ],
  },
  {
    title: "Dimensions",
    rows: [
      ["Width", "265.32 cm", "265.32 cm"],
      ["Height", "76 cm", "76 cm"],
      ["Depth", "167.76 cm", "167.76 cm"],
      ["Weight", "45 KG", "65 KG"],
      ["Seat Height", "41.52 cm", "41.52 cm"],
      ["Leg Height", "5.46 cm", "5.46 cm"],
    ],
  },
  {
    title: "Warranty",
    rows: [
      [
        "Warranty Summary",
        "1 Year Manufacturing Warranty",
        "1.2 Year Manufacturing Warranty",
      ],
      [
        "Warranty Service Type",
        "For Warranty Claims or Any Product Related Issues Please Email at operations@trevfurniture.com",
        "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
      ],
      [
        "Covered in Warranty",
        "Warranty Against Manufacturing Defect",
        "Warranty of the product is limited to manufacturing defects only.",
      ],
      [
        "Not Covered in Warranty",
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of The Product Usage.",
        "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of The Product Usage.",
      ],
      ["Domestic Warranty", "1 Year", "3 Months"],
    ],
  },
];

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-mark">△</span>
        Furniro
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="header-icons">
        <span>♙</span>
        <span>⌕</span>
        <span>♡</span>
        <span>🛒</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Product Comparison</h1>

        <div className="breadcrumb">
          <span>Home</span>
          <b>›</b>
          <span>Comparison</span>
        </div>
      </div>
    </section>
  );
}

function ProductCards() {
  return (
    <section className="product-area">
      <div className="more-products">
        <h3>Go to Product<br />page for more<br />Products</h3>
        <a href="#">View More</a>
      </div>

      {products.map((product) => (
        <div className="product-card" key={product.name}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <h3>{product.name}</h3>

          <strong>{product.price}</strong>

          <div className="rating">
            <span>{product.rating}</span>
            <span className="stars">★★★★</span>
            <small>{product.reviews}</small>
          </div>
        </div>
      ))}

      <div className="add-product">
        <h3>Add A Product</h3>

        <select>
          <option>Choose a Product</option>
          <option>Modern Sofa</option>
          <option>Luxury Sofa</option>
          <option>Dining Table</option>
        </select>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="comparison">
      {comparisonData.map((section) => (
        <div className="comparison-section" key={section.title}>
          <div className="section-title">
            <h2>{section.title}</h2>
          </div>

          {section.rows.map((row, index) => (
            <div className="comparison-row" key={index}>
              <div className="label">{row[0]}</div>
              <div>{row[1]}</div>
              <div>{row[2]}</div>
            </div>
          ))}

          {section.title === "Warranty" && (
            <div className="cart-row">
              <div></div>
              <div>
                <button>Add To Cart</button>
              </div>
              <div>
                <button>Add To Cart</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <div className="feature">
        <div className="feature-icon">♜</div>
        <div>
          <h3>High Quality</h3>
          <p>crafted from top materials</p>
        </div>
      </div>

      <div className="feature">
        <div className="feature-icon">✓</div>
        <div>
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
      </div>

      <div className="feature">
        <div className="feature-icon">▣</div>
        <div>
          <h3>Free Shipping</h3>
          <p>Order over 150 $</p>
        </div>
      </div>

      <div className="feature">
        <div className="feature-icon">◴</div>
        <div>
          <h3>24 / 7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-company">
        <h2>Furniro.</h2>

        <p>
          400 University Drive Suite 200 Coral<br />
          Gobles,<br />
          FL 33134 USA
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

      <div className="newsletter">
        <h4>Newsletter</h4>

        <div className="subscribe">
          <input
            type="email"
            placeholder="Enter Your Email Address"
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ProductCards />
      <ComparisonTable />
      <Features />
      <Footer />
    </div>
  );
}