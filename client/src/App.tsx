import "./App.css";
import { Routes, Route } from "react-router";
import Today from "./components/sections/today/Today";
import Layout from "./components/main/Layout";
import { TasksProvider } from "./context/TaskProvider";
import Upcoming from "./components/sections/upcoming/Upcoming";
import Completed from "./components/sections/completed/Completed";
import SectionType from "./components/sections/section-type/SectionType";
import SectionPriority from "./components/sections/section-priority/SectionPriority";
import Forgotten from "./components/sections/forgotten/Forgotten";

function App() {
  return (
    <div className="main">
      <TasksProvider>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<MainPage/>}></Route> */}
          <Route path="/" element={<Today />}></Route>
          <Route path="/upcoming" element={<Upcoming />}></Route>
          <Route path="/completed" element={<Completed />}></Route>
          <Route path="/forgotten" element={<Forgotten />}></Route>
          <Route path="/tasks/type/:sectionType" element={<SectionType />}></Route>
          <Route path="/tasks/priority/:sectionPriority" element={<SectionPriority/>}></Route>
        </Routes>
      </Layout>
      </TasksProvider>
    </div>
  );
}

export default App;
