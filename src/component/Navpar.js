import React from "react";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import Product from "./CreateProduct/Product";
import CreateCard from "./NewContent/CreateCard";
import ProductDetails from "./CreateProduct/productDetails";
import AddMember from "./AddMember/AddMember";
import Teams from "./Teams";
import Qutation from "./B2Bcomponent/Qutation";
import B2Bsheet from "./B2Bcomponent/B2Bsheet";
import Salessheet from "./SalesSheetcomponent/Salessheet";
import SalesSheetCard from "./SalesSheetcomponent/SalesSheetCard";
import FilterEmail from "./EmailsComponent/FilterEmail";
function MyNavpar() {
  const redirectToExternalURL = () => {
    window.location.href =
      "https://mostafaahmed20.github.io/SafaStatic.github.io/#";
  };

  return (
    <div>
      <body>
        <nav className="navbar bg-dark">
          <h1>
            <Link to="/">
              <i className="fas fa-code"></i> Shamel 🎄 Safa
            </Link>
          </h1>
          <ul>
            <li>
              <Link to="/Salessheet">SalesSheetForm</Link>
            </li>
            <li>
              <Link to="/item">Product</Link>
            </li>
            <li>
              <Link to="/CreateProduct">Create Product</Link>
            </li>
            <li>
              <Link to="/AddMember">AddMember</Link>
            </li>
            <li>
              <Link to="/Agent">Agent</Link>
            </li>
            <li>
              <Link to="/Qutation">B2B</Link>
            </li>
            <li>
              <Link to="/Mails">Emails</Link>
            </li>
            <li>
              <a
                href="https://mostafaahmed20.github.io/SafaStatic.github.io/#"
                onClick={redirectToExternalURL}
              >
                Knowledge-Base
              </a>
            </li>
          </ul>
        </nav>
        <section className="landing">
          <div className="dark-overlay">
            <div className="landing-inner">
              <h3 className="x-large">Connecting The Dots 🚀 </h3>
              <p className="lead">
                Create & share posts and get help from others
              </p>
            </div>
          </div>
        </section>
      </body>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Product />} />
        <Route path="/CreateProduct" element={<CreateCard />} />
        <Route path="/:ProductID" element={<ProductDetails />} />
        <Route path="/Agent" element={<Teams />} />
        <Route path="/AddMember" element={<AddMember />} />
        <Route path="/Qutation" element={<Qutation />} />
        <Route path="/B2BDATA" element={<B2Bsheet />} />
        <Route path="/Salessheet" element={<Salessheet />} />
        <Route path="/SalesSheetCard" element={<SalesSheetCard />} />
        <Route path="/Mails" element={<FilterEmail />} />
      </Routes>
    </div>
  );
}

export default MyNavpar;
