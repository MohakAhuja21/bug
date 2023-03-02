import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <h2>get daily dose of <b>health.</b></h2>
      <div className="row row-newsletter">
          <form action="" className="footer__formCon">
            <input className="footer__form" type="text" placeholder="Email Address / subscribe" />
            <button className="footer__button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </button>
          </form>
      </div>

      <div className="row">
        {/* change a to link *imp */}
        <ul>
          <li>
            <a href="#" target={'blank'}>Contact us</a>
          </li>
          <li>
            <a href="#" target={'blank'}>Our Services</a>
          </li>
          <li>
            <a href="#" target={'blank'}>Privacy Policy</a>
          </li>
          <li>
            <a href="#" target={'blank'}>Terms & Conditions</a>
          </li>
        </ul>
      </div>

      <div style={{ pointerEvents: "none" }} className="row">
        Kamal Medicos Pharma ©2023 - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
