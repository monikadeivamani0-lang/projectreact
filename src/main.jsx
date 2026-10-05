import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import ProductDetails from "./productdetails.jsx";
import ProductComparsion from "./productcomparsion.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* First Page - Shop */}
        <Route path="/" element={<App />} />

        {/* Second Page - Product Details */}
        <Route path="/product" element={<ProductDetails />} />

        {/* Third Page - Product Comparison */}
        <Route path="/comparsion" element={<ProductComparsion />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);