import { Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/dashboard/Dashboard";
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
      </Routes>
      <ContactMe />
    </div>
  );
}

export default App;
