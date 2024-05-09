import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";

const Footer = () => {
  return (
    <div className="footer">
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col foot-company">
              <div class="footer-logo">
                <img src={footer_logo} alt="" />
                <ul>
                  <p>SWIFTCART</p>
                  <li>&copy; 2024 SwiftCart.Inc</li>
                  <li>All Rights Reserved</li>
                </ul>
              </div>
            </div>

            <div class="footer-col foot-useful-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div class="footer-col foot-contacts">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i class="fas fa-phone"></i> +91-7562013407
                </li>
                <li>
                  <i class="fas fa-envelope"></i> ajeetjaiswal75620@gmail.com
                </li>
                <li>
                  <i class="fas fa-location-dot"></i> Bhubaneswar, Odisha
                </li>
              </ul>
            </div>

            <div class="footer-col ps-lg-5 foot-social">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// <div className="footer">
//   <div className="footer-logo">
//     <img src={footer_logo} alt="" />
//     <p>SHOPPER</p>
//   </div>
//   <ul className="footer-links">
//     <li>Company</li>
//     <li>Products</li>
//     <li>Offices</li>
//     <li>About</li>
//     <li>Contact</li>
//   </ul>
//   <div className="footer-social-icon">
//     <div className="footer-social-container">
//       <img src={instagram_icon} alt="" />
//     </div>
//     <div className="footer-social-container">
//       <img src={pintester_icon} alt="" />
//     </div>
//     <div className="footer-social-container">
//       <img src={whatsapp_icon} alt="" />
//     </div>
//   </div>
//   <div className="footer-copyright">
//     <hr />
//     <p>Copyright @ 2024 -All Right Reserved</p>
//   </div>
// </div>
