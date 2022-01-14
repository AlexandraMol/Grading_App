import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentPage from "./pages/StudentPage";
import ProffesorPage from "./pages/ProffesorPage";
import MyProjects from "./pages/MyProjectsFolder/MyProjects";
import SelectedProject from "./pages/MyProjectsFolder/SelectedProject";
import SelectedFile from "./pages/MyProjectsFolder/SelectedFile";
import OtherProjects from "./pages/OtherProjectsFolder/OtherProjects";
import SelectedOtherProject from "./pages/OtherProjectsFolder/SelectedOtherProject";
import SelectedOtherFile from "./pages/OtherProjectsFolder/SelectedOtherFile";
import Students from "./pages/ProffesorPages/Students";
import ProjectsSelectedStudent from "./pages/ProffesorPages/ProjectsSelectedStudent";
import ClickedProject from "./pages/ProffesorPages/ClickedProject";
import ClickedFile from "./pages/ProffesorPages/ClickedFile";
import AddProject from "./pages/AddProjectFolder/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/studentPage/:id" element={<StudentPage />} />
        <Route path="/proffesorPage/:id" element={<ProffesorPage />} />
        {/* MyProjects Routes */}
        <Route path="/studentPage/:id/myprojects" element={<MyProjects />} />
        <Route
          path="/studentPage/:id/myprojects/:idProject"
          element={<SelectedProject />}
        />
        <Route
          path="/studentPage/:id/myprojects/:idProject/files/:idFile"
          element={<SelectedFile />}
        />

        {/* MyProjects Routes Ending */}

        {/* OtherProjects Routes */}
        <Route
          path="/studentPage/:id/otherprojects"
          element={<OtherProjects />}
        />

        <Route
          path="/studentPage/:id/otherprojects/:idProject"
          element={<SelectedOtherProject />}
        />

        <Route
          path="/studentPage/:id/otherprojects/:idProject/files/:idFile"
          element={<SelectedOtherFile />}
        />
        {/* OtherProjects Routes Ending */}
        {/* AddProject Routes */}
        <Route path="/studentPage/:id/addproject" element={<AddProject />} />

        {/* AddProject Routes Ending */}

        {/* Proffesor Routes Ending */}

        <Route path="/proffesorPage/students" element={<Students />} />
        <Route
          path="/proffesorPage/students/:idStudent/projects"
          element={<ProjectsSelectedStudent />}
        />
        {/* <Route path="/proffesorPage/students/:idStudent/projects/:projectId" element ={<ClickedProject/>}/> */}
        <Route
          path="/proffesorPage/students/:idStudent/projects/:projectId/files"
          element={<ClickedProject />}
        />
        <Route
          path="/proffesorPage/students/:idStudent/projects/:projectId/files/:idFile"
          element={<ClickedFile />}
        />

        {/* Proffesor Routes Ending */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
