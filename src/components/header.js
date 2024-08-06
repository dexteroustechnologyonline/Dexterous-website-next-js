"use client";
import React, { useState, useEffect } from "react";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { RiArrowUpSFill } from "react-icons/ri";
import "../../public/styles/global.css";
import Link from "next/link";
import { CiGlobe, CiMobile2 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const linkAction = () => {
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="w3l-header-nav">
      <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img
              src="styles/assets/images/logo.png"
              alt="Your logo"
              title="Your logo"
              style={{ height: 45 }}
            />
          </Link>
          <Link
            className="navbar-brand logotext"
            href="/"
            style={{ fontSize: "20px" }}
          >
            Dexterous <span>Technology</span>
          </Link>
          <button
            id="nav-button"
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarSupportedContent"
            aria-expanded={showMenu}
            aria-label="Toggle navigation"
          >
            {showMenu ? (
              <FaTimes style={{ color: "#fff" }} />
            ) : (
              <FaBars style={{ color: "#fff" }} />
            )}
          </button>
          <div
            className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item @@home__active">
                <Link
                  className="nav-link navbarfont"
                  href="/"
                  onClick={linkAction}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item @@about__active">
                <Link
                  className="nav-link navbarfont"
                  href="/about"
                  onClick={linkAction}
                >
                  About
                </Link>
              </li>
              <li className="nav-item @@contact__active profiledropdown">
                <Link
                  className="nav-link navbarfont"
                  href="/services"
                  onClick={toggleDropdown}
                >
                  Services
                  {!showDropdown ? (
                    <FaCaretDown className="arrowdown" />
                  ) : (
                    <RiArrowUpSFill className="arrowup" />
                  )}
                </Link>
                {showDropdown && (
                  <ul className="mainboxcontainer forFive">
                    <li className="list">
                      <Link
                        className="subnavigation"
                        href="/WebDevelopment"
                        onClick={(e) => {
                          linkAction(e);
                        }}
                        style={{ fontSize: "15px" }}
                      >
                        <CiGlobe /> Web Development
                      </Link>
                    </li>

                    <li className="list borderbottom">
                      <Link
                        className="subnavigation"
                        href="/MobileAppDevelopment"
                        onClick={linkAction}
                        style={{ fontSize: "15px" }}
                      >
                        <CiMobile2 /> App Development
                      </Link>
                    </li>
                    <li className="list borderbottom">
                      <Link
                        className="subnavigation"
                        href="/Web-Design"
                        onClick={linkAction}
                        style={{ fontSize: "15px" }}
                      >
                        <CiGlobe /> Web Design
                      </Link>
                    </li>
                    <li className="list borderbottom">
                      <Link
                        className="subnavigation"
                        href="/ios-app-development"
                        onClick={linkAction}
                        style={{ fontSize: "15px" }}
                      >
                        <CiMobile2 /> iOS App Development
                      </Link>
                    </li>
                    <li className="list borderbottom">
                      <Link
                        className="subnavigation"
                        href="/UIUXDesign"
                        onClick={linkAction}
                        style={{ fontSize: "15px" }}
                      >
                        <CiGlobe /> UI-UX-Design
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item @@contact__active profiledropdown">
                <Link
                  className="nav-link navbarfont"
                  href="/"
                  onClick={toggleDropdown}
                >
                  Portfolio
                  {!showDropdown ? (
                    <FaCaretDown className="arrowdown" />
                  ) : (
                    <RiArrowUpSFill className="arrowup" />
                  )}
                </Link>
                {showDropdown && (
                  <ul className="mainboxcontainer">
                    <li className="list">
                      <Link
                        className="subnavigation"
                        href="/Grocery-app-developement"
                        onClick={linkAction}
                      
                      >
                        <IoCartOutline /> E-commerce
                      </Link>
                    </li>
                    <li className="list">
                      <Link
                        className="subnavigation"
                        href="/generalwebsites"
                        onClick={linkAction}
                       
                      >
                        <CiGlobe /> General Websites
                      </Link>
                    </li>
                    <li className="list borderbottom">
                      <Link
                        className="subnavigation"
                        href="/android-app-development"
                        onClick={linkAction}
                       
                      >
                        <CiMobile2 /> Mobile Apps
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item @@contact__active" onClick={linkAction}>
                <Link className="nav-link navbarfont" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item @@contact__active">
                <Link
                  className="nav-link navbarfont"
                  href="/contact"
                  onClick={linkAction}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="tp-header-contact-inner d-flex align-items-center ml-auto nav-link mobile">
              <div className="mobilecall">
                <img
                  src="../../styles/assets/images/calling.png"
                  className="whatsapp_float_btn imagecalling text-white"
                  style={{
                    height: "45px",
                    width: "45px",
                    backgroundColor: "#2e5deb",
                    padding: "10px",
                    color: "#fff",
                  }}
                />
              </div>
              <div className="mobilecall pl-3">
                <p className="text-white calling" style={{ fontWeight: "100" }}>
                  Call 24×7
                </p>
                <div className="phoneresponsive">
                  <a
                    href="tel:+919908516950"
                    className="text-white responsivenumber1"
                  >
                    +91 9908516950
                  </a>
                  <div className="text-white px-1 slash">/</div>
                  <a
                    href="tel:+919515705570"
                    className="text-white mr-2 responsivenumber2"
                  >
                    +91 9515705570
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
