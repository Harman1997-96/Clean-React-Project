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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import Exterior from "./components/Pages/Exterior/Exterior";ss
import Interior from "./components/Pages/Interior/Interior";
import NavbarSet from "./components/Navbar/Navbar";
import Exterior from "./components/Pages/Exterior/Exterior";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";

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
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Router>
        {" "}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/exterior" element={<Exterior />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/workwithus" element={<WorkWithUs />} />
        </Routes>
      </Router>

      <Footer />
      {/* <Intro /> */}
    </div>
  );
}

export default App;
