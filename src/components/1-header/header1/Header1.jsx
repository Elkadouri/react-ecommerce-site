import "./header1.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; 

import { useEffect, useState } from "react";

export default function Header1() {

  const [mode , setMode] = useState(localStorage.mode ?? 'light');

  useEffect(() => {
    localStorage.setItem('mode' , mode);
    document.body.className = mode;
  }, [mode])


  return (
    <div className="container h1">
      <div className="left">
        <span className="hot">HOT</span>
        <span className="free">Free Express Shipping</span>
      </div>

      <div style={{ flexGrow: 1 }} />

      <div className="right">

        <button onClick={() => setMode(mode === 'light' ? '' : 'light')}>
          <FontAwesomeIcon
            icon={mode === "light" ? faMoon : faSun}
          />
        </button>

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

    </div>
  );
}
