import { Routes, Route } from "react-router-dom";

function AutomationRoot() {
  return (
    <Routes>
      <Route path="/" element={<>AutomationRoot</>} />
    </Routes>
  );
}

export default AutomationRoot;
