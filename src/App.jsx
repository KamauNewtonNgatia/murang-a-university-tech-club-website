import "./App.css";
import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Leadership from "./Pages/Home/Leadership/Leadership";
import Tracks from "./Pages/Home/Leadership/Tracks/Tracks";
import Events from "./Pages/Home/Leadership/Tracks/Events/Events";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leadership" element={<Leadership />} />
          <Route path="/Tracks" element={<Tracks />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
