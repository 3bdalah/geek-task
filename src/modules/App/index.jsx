import { lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppContainer from "./views/AppContainer";

const Alerts = lazy(() => import("../Alerts"));
const Trading = lazy(() => import("../Trading"));
const Training = lazy(() => import("../Training"));
const Portfolio = lazy(() => import("../Portfolio"));
const Automation = lazy(() => import("../Automation"));

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="alerts/*" element={<Alerts />} />
          <Route path="training/*" element={<Training />} />
          <Route path="automation/*" element={<Automation />} />
          <Route path="portfolio/*" element={<Portfolio />} />
          <Route path="trading/*" element={<Trading />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
