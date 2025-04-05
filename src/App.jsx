import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionScreen from "./components/QuestionScreen";
import WelcomeScreen from "./components/WelcomeScreen";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/formulario" element={<QuestionScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
