import "./App.css";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
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
           <a className="her-1" href="https://www.facebook.com"
            target="_blank">
           <FaFacebookSquare />
           </a>
            <a className="her-1" href="https://web.whatsapp.com"  target="_blank">
            <FaWhatsappSquare />
            </a>
            <a className="her-1" href="https://www.instagram.com" target="_blank">
            <FaLinkedin />
            </a>
            <a className="her-1" href="https://x.com/?lang=en" target="_blank">
            <FaSquareTwitter />
            </a>
          </div>
        </div>
          <nav>
             
          </nav>
      </header>
    </>
  );
}

export default App;
