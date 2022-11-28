import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quiz" element={<Quiz />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
