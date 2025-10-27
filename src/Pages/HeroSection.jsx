import React, { useState, useEffect } from "react";
import "../App.css";
import { FaTimes } from "react-icons/fa";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 710);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 710);

      // Close the menu if resizing to desktop
      if (window.innerWidth > 710) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero-section">
      <div className="nav-container">
        <div className="logo">
          <strong>GD.</strong>
        </div>

        {/* Desktop nav */}
        <nav className="nav-links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/ourWork">Our Work</a>
          <button href="/enroll" className="enroll-button">
            <span className="enroll-text">Enrol Now</span>
          </button>
        </nav>

        {/* Hamburger menu - only on mobile */}
        {isMobile && (
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <img src="/bar.png" alt="bar" />
          </div>
        )}
      </div>

      {/* Mobile nav overlay - only on mobile */}
      {isMobile && (
        <div className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`}>
          <div className="mobile-nav">
            <div className="close-btn" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </div>
            <nav className="mobile-nav-links">
              <a href="/about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="/ourWork" onClick={() => setMenuOpen(false)}>
                Our Work
              </a>
              <a
                href="/enroll"
                className="enroll-button"
                onClick={() => setMenuOpen(false)}
              >
                Enrol Now
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero content */}
      <h1 className="hero-heading">
        Learn the art of
        <br />
        Game Dev
      </h1>
      <p className="hero-description">
        This is a comprehensive course on Game Development. You will learn
        everything from generating an idea to publishing your games to different
        platforms.
      </p>
      <div className="button">
        <img src="/PencilAlt.png" alt="pencil-alt" className="pencil-alt" />
        <div className="button-text">Enrol Now</div>
      </div>

      <div className="group">
        <div className="outer-stat1"></div>
        <div className="inner-stat1"></div>
        <p className="stat-heading1">4.7</p>
        <img src="/star.png" alt="star" className="star" />
        <p className="stat-paragraph1">Overall Rating</p>
      </div>

      <div className="achievement">
        <div className="outer-stat2"></div>
        <div className="inner-stat2"></div>
        <p className="stat-heading2">32K</p>
        <p className="stat-paragraph2">Students Enrolled</p>
      </div>

      <img src="/image.png" alt="Game dev Banner" className="image" />
    </section>
  );
};

export default HeroSection;
