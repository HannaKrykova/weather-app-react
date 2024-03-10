import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForecast from "./SearchForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <SearchForecast />
      <Footer />
    </div>
  );
}

export default App;
