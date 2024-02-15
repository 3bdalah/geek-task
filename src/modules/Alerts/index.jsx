import { Routes, Route } from "react-router-dom";

function AlertsRoot() {
  return (
    <Routes>
      <Route path="/" element={<>AlertsRoot</>} />
    </Routes>
  );
}

export default AlertsRoot;
