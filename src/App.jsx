import "./App.css";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import help from "../public/Help.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import person from "./assets/person.png";
import { useState } from "react";
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
    alert(`Siz ${item.name} ni tanladingiz!`);
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
        <section id="section-1">
          <div className="nav-bars">
             
          </div>
        </section>
      </header>
    </>
  );
}

export default App;
