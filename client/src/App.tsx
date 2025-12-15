import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./components/main/Layout";
import { TasksProvider } from "./context/TaskProvider";
import SectionType from "./components/sections/section-type/SectionType";
import SectionPriority from "./components/sections/section-priority/SectionPriority";
import SectionTasks from "./components/sections/section-tasks/SectionTasks";
import TaskSinglePage from "./components/tasks/single-task/TaskSinglePage";
import AllTasks from "./components/tasks/AllTasks";
import PageNotFound from "./components/404/PageNotFound";

function App() {
  return (
    <div className="main">
      <TasksProvider>
      <Layout>
        <Routes>
          <Route path="*" element={<PageNotFound/>}></Route>
          <Route path="/" element={<AllTasks/>}></Route>
          <Route path="/tasks/:sectionTasks" element={<SectionTasks />}></Route>
          <Route path="/tasks/type/:sectionType" element={<SectionType />}></Route>
          <Route path="/tasks/priority/:sectionPriority" element={<SectionPriority/>}></Route>
          <Route path="/task/:taskId" element={<TaskSinglePage/>}></Route>
        </Routes>
      </Layout>
      </TasksProvider>
    </div>
  );
}

export default App;
