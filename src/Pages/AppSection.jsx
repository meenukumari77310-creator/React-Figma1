import React from "react";
import "../App.css"; // Or your CSS file

const AppSection = () => {
  return (
    <section className="app-section">
      <div className="app-heading">
        <h1>Get our App</h1>
      </div>
      <p className="app-title">
        You can use our App for better experience on smartphones
      </p>

      <div className="store-buttons">
        <a href="/app" className="store-button">
          <img src="/AppStore.png" alt="App Store" className="app-image" />
          <span className="app-name">App Store</span>
        </a>
        <a href="/googlePlay" className="store-button">
          <img src="/play.png" alt="Google Play Store" className="app-image" />
          <span className="app-name">Google Play</span>
        </a>
      </div>
    </section>
  );
};

export default AppSection;
