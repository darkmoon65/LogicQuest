import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Menu from "./components/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
