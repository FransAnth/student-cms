import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClassroomPage from "./pages/Classrooms";
import CoursesPage from "./pages/Courses";
import StudentsPage from "./pages/Students";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="students" element={<StudentsPage />} />
        <Route path="classrooms" element={<ClassroomPage />} />
        <Route path="courses" element={<CoursesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
