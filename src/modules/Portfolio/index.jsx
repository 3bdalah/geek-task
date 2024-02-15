import { Routes, Route } from "react-router-dom";

function PortfolioRoot() {
  return (
    <Routes>
      <Route path="/" element={<>PortfolioRoot</>} />
    </Routes>
  );
}

export default PortfolioRoot;
