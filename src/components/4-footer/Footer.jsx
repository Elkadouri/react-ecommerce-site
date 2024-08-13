import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contact Us</h2>

      <div className="info">
        <p className="address">
          70 Boulevard Mohammed V,
          <br /> Casablanca, 20000, Morocco
        </p>

        <div>
          <p className="email">Email: support@kmm.com</p>
          <div className="links">
            <a href="https://x.com/" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a href="https://facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="https://instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className="phone">+212 6123 45678 <br />+212 6876 54009</p>
        </div>



      </div>

      <p className="mr">
        Designed and Developed by <span> Mostapha Elkadouri.</span>
      </p>

      <p className="copy">
        {`© ${new Date().getFullYear()}`} <span>KMM</span>. All rights reserved.
      </p>

   
    </footer>
  );
}
