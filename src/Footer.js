import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by {""}
      <a href="https://github.com/HannaKrykova" target="_blank" rel="noopener">
        Hanna Krykova
      </a>
      , is open-sourced on {""}
      <a
        href="https://github.com/HannaKrykova/weather-app-react"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
      {""} and hosted on {""}
      <a
        href="https://weather-app-react-hannakrykova.netlify.app/"
        target="_blank"
        rel="noopener"
      >
        Netlify
      </a>
    </div>
  );
}
