import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./pages/Questionspage/Questions";
import Startpage from "./pages/Startpage/Startpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
