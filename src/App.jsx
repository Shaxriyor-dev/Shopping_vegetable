import "./App.css";
import * as React from "react";
import { useState } from "react";
import help from "../public/Help.png";
import Badge from "@mui/material/Badge";
import person from "./assets/person.png";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contend from "./components/Contend.jsx";
import { FaLinkedin } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import noi from "./assets/noi.png";
import recust from "./assets/recus.png";
import perol from "./assets/perol.png";
const data = [
  { id: 1, name: "Fresh organic apricot" },
  { id: 2, name: "Nok" },
  { id: 3, name: "Shaftoli" },
  { id: 4, name: "Availablek Cucumber" },
  { id: 5, name: "Available" },
  { id: 6, name: "Dairy & Eggs" },
  { id: 7, name: "Beverages" },
  { id: 8, name: "Home Care" },
  { id: 9, name: "Snacks" },
];
function App() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };

  const handleSelect = (item) => {
    setSearch(item.name);
    setFilteredData([]);
    window.location.href = "https://shopping130.netlify.app";
  };
  return (
    <>
      <header>
        <div className="box-older">
          <a className="herf-1" href="mailto:shaxriyorturgunov000@gmail.com">
            {" "}
            <MdOutlineLocalPostOffice className="texs" />
            Hello@colorlib.com
          </a>
          <div className="size"></div>
          <p className="text">Free Shipping for all order of $99</p>
          <div className="size"></div>
          <div className="box-felx">
            <a
              className="her-1"
              href="https://www.facebook.com"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
            <a
              className="her-1"
              href="https://web.whatsapp.com"
              target="_blank"
            >
              <FaWhatsappSquare />
            </a>
            <a
              className="her-1"
              href="https://www.instagram.com"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a className="her-1" href="https://x.com/?lang=en" target="_blank">
              <FaSquareTwitter />
            </a>
          </div>
        </div>
        <nav>
          <div className="hero">
            <a href="/">
              <img src={help} alt="" />
            </a>
            <div className="selects">
              <a id="cars" href="#">
                <FaLocationDot />
              </a>
              <select name="cars" id="cars">
                <option value="volvo"> Gurugram</option>
                <option value="saab">Olma</option>
                <option value="mercedes">Sabzi</option>
                <option value="audi">Kartoshka</option>
              </select>
            </div>
            <div className="box-input">
              <a href="#">
                <IoMdSearch className="lf" />
              </a>
              <div className="p-4">
                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Qidirish..."
                  className="input-1"
                />
                {filteredData.length > 0 && (
                  <ul className="ul-input">
                    {filteredData.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        className=" kill p-4 cursor-pointer hover:bg-gray-200 "
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="divs">
            <div className="nomber">
              <a className="nomer" href="tel:+998937981208">
                <FiPhoneCall />
                1800-000-000
              </a>
            </div>
            <div className="pl"></div>
            <Badge badgeContent={1} color="primary">
              <FavoriteBorderIcon color="action" sx={{ fontSize: "27px" }} />
            </Badge>
            <div className="pl"></div>
            <div className="accaund">
              <div className="selects">
                <a id="car" href="#">
                  <img src={person} alt="" />
                </a>
                <select name="car" id="car">
                  <option value="volvo"> John Doe</option>
                  <option value="saab">John dli</option>
                  <option value="mercedes">Koli</option>
                  <option value="audi">Kartoshka</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
        <div className="hr"></div>
        <div className="nav-bars">
          <div className="nav-ul-li">
            <div className="gold">
              <button className="btn-2">
                <FiAlignLeft className="op" />
                Select Categories
              </button>
              <Router>
                <nav className="nav-op">
                  <Link className="Link" to="/">
                    HOME
                  </Link>
                  <Link className="Link" to="/home">
                    PRODUCT
                  </Link>
                  <Link className="Link" to="/about">
                    STORES
                  </Link>
                  <Link className="Link" to="/contend">
                    CONTACT
                  </Link>
                </nav>
                <Routes>
                  <Route path="/" />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contend" element={<Contend />} />
                </Routes>
              </Router>
            </div>
            <div>
              <button className="card">
                <IoCartOutline className="oq" />
                CART 2
              </button>
            </div>
          </div>
        </div>
        <div className="hr"></div>
      </header>
      <section id="section-1">
        <div className="conteiner">
          <div className="contmed-img">
            <img src={noi} alt="" />
            <div className="imgdis">
              <p className="foiz">10% OFF</p>
              <p className="how">Buy More & Save More</p>
              <p className="snoce">Nuts & Snacks</p>
            </div>
            <button className="btn-4">Shop now </button>
          </div>
          <div className="contmed-img">
            <img src={recust} alt="" />
            <div className="imgdis">
              <p className="foiz">10% OFF</p>
              <p className="how">Buy More & Save More</p>
              <p className="snoce">Nuts & Snacks</p>
            </div>
            <button className="btn-4">Shop now </button>
          </div>
          <div className="contmed-img">
            <img src={perol} alt="" />
            <div className="imgdis">
              <p className="foiz">10% OFF</p>
              <p className="how">Buy More & Save More</p>
              <p className="snoce">Nuts & Snacks</p>
            </div>
            <button className="btn-4">Shop now </button>
          </div>
        </div>
        <div className="homes">
          <div>
          <p className="fors">For You</p>
          <p className="tops"> Top Featured Products</p>
            <div className="swiper">
              <div className="box-spam">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
