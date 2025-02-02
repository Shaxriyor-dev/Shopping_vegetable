import "./App.css";
import * as React from "react";
import { useState } from "react";
import noi from "./assets/noi.png";
import same from "./assets/same.png";
import recust from "./assets/recus.png";
import perol from "./assets/perol.png";
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
import vector from "./assets/Vector.png";
import fil from "../public/fil.png";
import lopa from "../public/lopa.png";
import soq from "./assets/soq.png";
import Gored from "./assets/gord.png";
import xors from "./assets/xors.png";
import verg from "./assets/verg.png";
import saol from "./assets/saol.png";
import kplo from "./assets/kplo.png";
import hords from "./assets/hordsa.png";
import opaq from "./assets/opaqs.png";
import apple from "./assets/apple.png";
import mokd from "./assets/nokd.png";
import lope from "./assets/lope.png";
import dilm from "./assets/dilm.png";
import kopa from "./assets/kopa.png";
import losh from "./assets/losh.png";
import payment from "../public/payment.png";
import { TfiApple } from "react-icons/tfi";
import { FaGooglePlay } from "react-icons/fa";

import { MdOutlineLocalPostOffice } from "react-icons/md";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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
  const [cound, setcound] = useState(0);
  const qoshish = () => {
    setcound(cound + 1);
  };
  const ayrish = () => {
    setcound(cound - 1);
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
                <div className="opis">
                  <button className="btn-1">15%Off</button>
                  <div className="like-img">
                    <img src={vector} alt="" />
                  </div>
                </div>
                <div className="imga">
                  <img src={same} alt="" />
                </div>
                <p className="text-6">Available(in stock)</p>
                <p className="text-7">Fresh organic apricot</p>
                <div className="kalso">
                  <span className="spam-1">$12</span>
                  <a className="wert" href="#">
                    $15
                  </a>
                </div>
                <div className="pause">
                  <div className="diors">
                    <button onClick={ayrish} className="minus">
                      <img src={fil} alt="" />
                    </button>
                    <span>{cound}</span>
                    <button onClick={qoshish} className="pilus">
                      <img src={lopa} alt="" />
                    </button>
                  </div>
                  <div>
                    <a className="carts" href="#">
                      <img src={soq} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-spam">
                <div className="opis">
                  <button className="btn-1">15%Off</button>
                  <div className="like-img">
                    <img src={vector} alt="" />
                  </div>
                </div>
                <div className="imga">
                  <img src={Gored} alt="" />
                </div>
                <p className="text-6">Available(in stock)</p>
                <p className="text-7">Cucumber</p>
                <div className="kalso">
                  <span className="spam-1">$12</span>
                  <a className="wert" href="#">
                    $15
                  </a>
                </div>
                <div className="pause">
                  <div className="diors">
                    <button onClick={ayrish} className="minus">
                      <img src={fil} alt="" />
                    </button>
                    <span>{cound}</span>
                    <button onClick={qoshish} className="pilus">
                      <img src={lopa} alt="" />
                    </button>
                  </div>
                  <div>
                    <a className="carts" href="#">
                      <img src={soq} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-spam">
                <div className="opis">
                  <button className="btn-1">15%Off</button>
                  <div className="like-img">
                    <img src={vector} alt="" />
                  </div>
                </div>
                <div className="imga">
                  <img src={xors} alt="" />
                </div>
                <p className="text-6">Available(in stock)</p>
                <p className="text-7">Hazelnuts filbert nut</p>
                <div className="kalso">
                  <span className="spam-1">$12</span>
                  <a className="wert" href="#">
                    $15
                  </a>
                </div>
                <div className="pause">
                  <div className="diors">
                    <button onClick={ayrish} className="minus">
                      <img src={fil} alt="" />
                    </button>
                    <span>{cound}</span>
                    <button onClick={qoshish} className="pilus">
                      <img src={lopa} alt="" />
                    </button>
                  </div>
                  <div>
                    <a className="carts" href="#">
                      <img src={soq} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-spam">
                <div className="opis">
                  <button className="btn-1">15%Off</button>
                  <div className="like-img">
                    <img src={vector} alt="" />
                  </div>
                </div>
                <div className="imga">
                  <img src={same} alt="" />
                </div>
                <p className="text-6">Available(in stock)</p>
                <p className="text-7">Fresh organic apricot</p>
                <div className="kalso">
                  <span className="spam-1">$12</span>
                  <a className="wert" href="#">
                    $15
                  </a>
                </div>
                <div className="pause">
                  <div className="diors">
                    <button onClick={ayrish} className="minus">
                      <img src={fil} alt="" />
                    </button>
                    <span>{cound}</span>
                    <button onClick={qoshish} className="pilus">
                      <img src={lopa} alt="" />
                    </button>
                  </div>
                  <div>
                    <a className="carts" href="#">
                      <img src={soq} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-spam">
                <div className="opis">
                  <button className="btn-1">15%Off</button>
                  <div className="like-img">
                    <img src={vector} alt="" />
                  </div>
                </div>
                <div className="imga">
                  <img src={apple} alt="" />
                </div>
                <p className="text-6">Available(in stock)</p>
                <p className="text-7">Fresh organic apricot</p>
                <div className="kalso">
                  <span className="spam-1">$12</span>
                  <a className="wert" href="#">
                    $15
                  </a>
                </div>
                <div className="pause">
                  <div className="diors">
                    <button onClick={ayrish} className="minus">
                      <img src={fil} alt="" />
                    </button>
                    <span>{cound}</span>
                    <button onClick={qoshish} className="pilus">
                      <img src={lopa} alt="" />
                    </button>
                  </div>
                  <div>
                    <a className="carts" href="#">
                      <img src={soq} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-spam">
                <div className="opis">
                  <button className="btn-1">15%Off</button>
                  <div className="like-img">
                    <img src={vector} alt="" />
                  </div>
                </div>
                <div className="imga">
                  <img src={verg} alt="" />
                </div>
                <p className="text-6">Available(in stock)</p>
                <p className="text-7">Raw broccoli</p>
                <div className="kalso">
                  <span className="spam-1">$12</span>
                  <a className="wert" href="#">
                    $15
                  </a>
                </div>
                <div className="pause">
                  <div className="diors">
                    <button onClick={ayrish} className="minus">
                      <img src={fil} alt="" />
                    </button>
                    <span>{cound}</span>
                    <button onClick={qoshish} className="pilus">
                      <img src={lopa} alt="" />
                    </button>
                  </div>
                  <div>
                    <a className="carts" href="#">
                      <img src={soq} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-spam">
                <div className="opis">
                  <button className="btn-1">15%Off</button>
                  <div className="like-img">
                    <img src={vector} alt="" />
                  </div>
                </div>
                <div className="imga">
                  <img src={same} alt="" />
                </div>
                <p className="text-6">Available(in stock)</p>
                <p className="text-7">Fresh organic apricot</p>
                <div className="kalso">
                  <span className="spam-1">$12</span>
                  <a className="wert" href="#">
                    $15
                  </a>
                </div>
                <div className="pause">
                  <div className="diors">
                    <button onClick={ayrish} className="minus">
                      <img src={fil} alt="" />
                    </button>
                    <span>{cound}</span>
                    <button onClick={qoshish} className="pilus">
                      <img src={lopa} alt="" />
                    </button>
                  </div>
                  <div>
                    <a className="carts" href="#">
                      <img src={soq} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-spam">
                <div className="opis">
                  <button className="btn-1">15%Off</button>
                  <div className="like-img">
                    <img src={vector} alt="" />
                  </div>
                </div>
                <div className="imga">
                  <img src={saol} alt="" />
                </div>
                <p className="text-6">Available(in stock)</p>
                <p className="text-7">Organic quince</p>
                <div className="kalso">
                  <span className="spam-1">$12</span>
                  <a className="wert" href="#">
                    $15
                  </a>
                </div>
                <div className="pause">
                  <div className="diors">
                    <button onClick={ayrish} className="minus">
                      <img src={fil} alt="" />
                    </button>
                    <span>{cound}</span>
                    <button onClick={qoshish} className="pilus">
                      <img src={lopa} alt="" />
                    </button>
                  </div>
                  <div>
                    <a className="carts" href="#">
                      <img src={soq} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-2">
        <div className="homes">
          <div>
            <p className="fors">Offers</p>
            <p className="tops">Best Values</p>
            <div className="boxs-flex">
              <div className="container">
                <img className="img-o" src={kplo} alt="" />
                <p className="led">Daily Essentials </p>
                <p className="texto">20% off Everyday</p>
                <button className="btn-8">SHOP NOW</button>
              </div>
              <div className="container">
                <img className="img-o" src={hords} alt="" />
                <p className="led">Daily Essentials </p>
                <p className="texto">20% off Everyday</p>
                <button className="btn-8">SHOP NOW</button>
              </div>
              <div className="container">
                <img className="img-o" src={opaq} alt="" />
                <p className="led">Daily Essentials </p>
                <p className="texto">20% off Everyday</p>
                <button className="btn-8">SHOP NOW</button>
              </div>
            </div>
            <div className="herosa">
              <p className="fors">For You</p>
              <p className="tops">Top Vegetables & Fruits Products</p>
              <div className="swiper">
                <div className="box-spam">
                  <div className="opis">
                    <button className="btn-1">15%Off</button>
                    <div className="like-img">
                      <img src={vector} alt="" />
                    </div>
                  </div>
                  <div className="imga">
                    <img src={apple} alt="" />
                  </div>
                  <p className="text-6">Available(in stock)</p>
                  <p className="text-7">Fresh organic apricot</p>
                  <div className="kalso">
                    <span className="spam-1">$12</span>
                    <a className="wert" href="#">
                      $15
                    </a>
                  </div>
                  <div className="pause">
                    <div className="diors">
                      <button onClick={ayrish} className="minus">
                        <img src={fil} alt="" />
                      </button>
                      <span>{cound}</span>
                      <button onClick={qoshish} className="pilus">
                        <img src={lopa} alt="" />
                      </button>
                    </div>
                    <div>
                      <a className="carts" href="#">
                        <img src={soq} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-spam">
                  <div className="opis">
                    <button className="btn-1">15%Off</button>
                    <div className="like-img">
                      <img src={vector} alt="" />
                    </div>
                  </div>
                  <div className="imga">
                    <img src={mokd} alt="" />
                  </div>
                  <p className="text-6">Available(in stock)</p>
                  <p className="text-7">Cucumber</p>
                  <div className="kalso">
                    <span className="spam-1">$12</span>
                    <a className="wert" href="#">
                      $15
                    </a>
                  </div>
                  <div className="pause">
                    <div className="diors">
                      <button onClick={ayrish} className="minus">
                        <img src={fil} alt="" />
                      </button>
                      <span>{cound}</span>
                      <button onClick={qoshish} className="pilus">
                        <img src={lopa} alt="" />
                      </button>
                    </div>
                    <div>
                      <a className="carts" href="#">
                        <img src={soq} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-spam">
                  <div className="opis">
                    <button className="btn-1">15%Off</button>
                    <div className="like-img">
                      <img src={vector} alt="" />
                    </div>
                  </div>
                  <div className="imga">
                    <img src={lope} alt="" />
                  </div>
                  <p className="text-6">Available(in stock)</p>
                  <p className="text-7">Hazelnuts filbert nut</p>
                  <div className="kalso">
                    <span className="spam-1">$12</span>
                    <a className="wert" href="#">
                      $15
                    </a>
                  </div>
                  <div className="pause">
                    <div className="diors">
                      <button onClick={ayrish} className="minus">
                        <img src={fil} alt="" />
                      </button>
                      <span>{cound}</span>
                      <button onClick={qoshish} className="pilus">
                        <img src={lopa} alt="" />
                      </button>
                    </div>
                    <div>
                      <a className="carts" href="#">
                        <img src={soq} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-spam">
                  <div className="opis">
                    <button className="btn-1">15%Off</button>
                    <div className="like-img">
                      <img src={vector} alt="" />
                    </div>
                  </div>
                  <div className="imga">
                    <img src={dilm} alt="" />
                  </div>
                  <p className="text-6">Available(in stock)</p>
                  <p className="text-7">Fresh organic apricot</p>
                  <div className="kalso">
                    <span className="spam-1">$12</span>
                    <a className="wert" href="#">
                      $15
                    </a>
                  </div>
                  <div className="pause">
                    <div className="diors">
                      <button onClick={ayrish} className="minus">
                        <img src={fil} alt="" />
                      </button>
                      <span>{cound}</span>
                      <button onClick={qoshish} className="pilus">
                        <img src={lopa} alt="" />
                      </button>
                    </div>
                    <div>
                      <a className="carts" href="#">
                        <img src={soq} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="herosa">
              <p className="fors">For You</p>
              <p className="tops"> Added new Products</p>
              <div className="swiper">
                <div className="box-spam">
                  <div className="opis">
                    <button className="btn-1">15%Off</button>
                    <div className="like-img">
                      <img src={vector} alt="" />
                    </div>
                  </div>
                  <div className="imga">
                    <img src={kopa} alt="" />
                  </div>
                  <p className="text-6">Available(in stock)</p>
                  <p className="text-7">Fresh organic apricot</p>
                  <div className="kalso">
                    <span className="spam-1">$12</span>
                    <a className="wert" href="#">
                      $15
                    </a>
                  </div>
                  <div className="pause">
                    <div className="diors">
                      <button onClick={ayrish} className="minus">
                        <img src={fil} alt="" />
                      </button>
                      <span>{cound}</span>
                      <button onClick={qoshish} className="pilus">
                        <img src={lopa} alt="" />
                      </button>
                    </div>
                    <div>
                      <a className="carts" href="#">
                        <img src={soq} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-spam">
                  <div className="opis">
                    <button className="btn-1">15%Off</button>
                    <div className="like-img">
                      <img src={vector} alt="" />
                    </div>
                  </div>
                  <div className="imga">
                    <img src={mokd} alt="" />
                  </div>
                  <p className="text-6">Available(in stock)</p>
                  <p className="text-7">Cucumber</p>
                  <div className="kalso">
                    <span className="spam-1">$12</span>
                    <a className="wert" href="#">
                      $15
                    </a>
                  </div>
                  <div className="pause">
                    <div className="diors">
                      <button onClick={ayrish} className="minus">
                        <img src={fil} alt="" />
                      </button>
                      <span>{cound}</span>
                      <button onClick={qoshish} className="pilus">
                        <img src={lopa} alt="" />
                      </button>
                    </div>
                    <div>
                      <a className="carts" href="#">
                        <img src={soq} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-spam">
                  <div className="opis">
                    <button className="btn-1">15%Off</button>
                    <div className="like-img">
                      <img src={vector} alt="" />
                    </div>
                  </div>
                  <div className="imga">
                    <img src={lope} alt="" />
                  </div>
                  <p className="text-6">Available(in stock)</p>
                  <p className="text-7">Hazelnuts filbert nut</p>
                  <div className="kalso">
                    <span className="spam-1">$12</span>
                    <a className="wert" href="#">
                      $15
                    </a>
                  </div>
                  <div className="pause">
                    <div className="diors">
                      <button onClick={ayrish} className="minus">
                        <img src={fil} alt="" />
                      </button>
                      <span>{cound}</span>
                      <button onClick={qoshish} className="pilus">
                        <img src={lopa} alt="" />
                      </button>
                    </div>
                    <div>
                      <a className="carts" href="#">
                        <img src={soq} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box-spam">
                  <div className="opis">
                    <button className="btn-1">15%Off</button>
                    <div className="like-img">
                      <img src={vector} alt="" />
                    </div>
                  </div>
                  <div className="imga">
                    <img src={losh} alt="" />
                  </div>
                  <p className="text-6">Available(in stock)</p>
                  <p className="text-7">Fresh organic apricot</p>
                  <div className="kalso">
                    <span className="spam-1">$12</span>
                    <a className="wert" href="#">
                      $15
                    </a>
                  </div>
                  <div className="pause">
                    <div className="diors">
                      <button onClick={ayrish} className="minus">
                        <img src={fil} alt="" />
                      </button>
                      <span>{cound}</span>
                      <button onClick={qoshish} className="pilus">
                        <img src={lopa} alt="" />
                      </button>
                    </div>
                    <div>
                      <a className="carts" href="#">
                        <img src={soq} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="big-footer">
            
        </div>
    </footer>
    </>
  );
}

export default App;
