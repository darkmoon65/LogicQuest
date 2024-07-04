import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Menu from "./components/Menu";
import Page1 from "./components/Level1/Page1";
import Page2 from "./components/Level1/Page2";
import Page3 from "./components/Level1/Page3";
import Page4 from "./components/Level1/Page4";
import Page5 from "./components/Level1/Page5";
import Page6 from "./components/Level1/Page6";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/aprendizaje/1" element={<Page1 />} />
          <Route path="/aprendizaje/2" element={<Page2 />} />
          <Route path="/aprendizaje/3" element={<Page3 />} />
          <Route path="/aprendizaje/4" element={<Page4 />} />
          <Route path="/aprendizaje/5" element={<Page5 />} />
          <Route path="/aprendizaje/6" element={<Page6 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
