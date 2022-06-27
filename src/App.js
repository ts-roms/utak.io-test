import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/main.layout";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} exact element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
