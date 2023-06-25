import { Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/Dashboard";
import MiscellaneousPage from "./pages/Miscellaneous";
import ProjectsPage from "./pages/Projects";
import WorkExperiencePage from "./pages/WorkExperience";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/work-experience" element={<WorkExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/miscellaneous" element={<MiscellaneousPage />} />
      </Routes>
    </div>
  );
}

export default App;
