import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Copyright ⓒ 2023.Book Store.All rights reserved</p>
      <p className="icons">
        <Link href="https://www.linkedin.com/in/debraj-das-dev/">
          <AiFillLinkedin />
        </Link>
        <AiOutlineTwitter />
        <AiFillInstagram />
      </p>
    </div>
  );
};

export default Footer;
