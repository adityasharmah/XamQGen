import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const AppContainer = styled.div`
  background: linear-gradient(
    to right,
    #000000,
    #333333
  ); /* Off-white gradient background */
  min-height: 100vh; /* Ensure the gradient covers the full height of the viewport */
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
