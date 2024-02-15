import { Routes, Route } from "react-router-dom";

function TradingRoot() {
  return (
    <Routes>
      <Route path="/" element={<>TradingRoot</>} />
    </Routes>
  );
}

export default TradingRoot;
