import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentPage from "./pages/StudentPage";
import MyProjects from "./pages/MyProjectsFolder/MyProjects";
import SelectedProject from "./pages/MyProjectsFolder/SelectedProject";
import SelectedFile from "./pages/MyProjectsFolder/SelectedFile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/studentPage/:id" element={<StudentPage />} />
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

        {/* OtherProjects Routes Ending */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
