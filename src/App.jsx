import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Header/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
