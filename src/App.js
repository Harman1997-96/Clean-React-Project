import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exterior from "./components/Pages/Exterior/Exterior";
import Interior from "./components/Pages/Interior/Interior";

import Review from "./components/Pages/Review";
import NavbarSet from "./components/Navbar/Navbar";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {/* <Navbar /> */}
      <NavbarSet />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/exterior" element={<Exterior />} />
          <Route path="/interior" element={<Interior />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Intro /> */}
    </div>
  );
}

export default App;
