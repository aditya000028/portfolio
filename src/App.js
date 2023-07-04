import { Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/dashboard/Dashboard";
import MiscellaneousPage from "./pages/miscellaneous/Miscellaneous";
import ProjectsPage from "./pages/projects/Projects";
import WorkExperiencePage from "./pages/work-experience/WorkExperience";
import Navbar from "./components/navbar/Navbar";
import ContactMe from "./components/contact-me/contactMe";

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
      <ContactMe />
    </div>
  );
}

export default App;
