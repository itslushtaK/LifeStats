// src/App.js
import React from "react";
import "./App.css"; // Ensure your custom styles are here
import Home from "./components/Home"; // Import the Home component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home /> {/* Render the Home component */}
      </header>
    </div>
  );
}

export default App;
