// src/App.js
import React from 'react';
import './App.css'; // Import the App-specific CSS
import Navbar from './components/Navbar';  // Navbar Component
import Weather from './components/Weather'; // Weather Component
import Footer from './components/Footer';  // Footer Component

const App = () => {
  return (
    <div>
      <Navbar /> {/* Including the Navbar */}
      <header className="header">
        <h1>Welcome to MyShop</h1>
        <p>Your one-stop shop for everything</p>
      </header>
      <section className="weather-container">
        <h2>Current Weather</h2>
        <Weather />  {/* Including the Weather Component */}
      </section>
      <Footer /> {/* Including the Footer */}
    </div>
  );
};

export default App;
