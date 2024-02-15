import { Routes, Route } from "react-router-dom";

function TrainingRoot() {
  return (
    <Routes>
      <Route path="/" element={<>TrainingRoot</>} />
    </Routes>
  );
}

export default TrainingRoot;
