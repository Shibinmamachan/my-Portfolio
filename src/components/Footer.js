
import React from "react";
import "./Layout.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer-logo">
        SHIBIN<span>.dev</span>
      </a>

      <p>MERN Stack Developer | Kerala, India</p>

      <div className="footer-links">
        <a
          href="https://github.com/Shibinmamachan"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="#contact">Contact</a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Shibin Mamachan.
        All rights reserved.
      </p>
    </footer>
  );
}
