import "./App.css";
import { Routes, Route } from "react-router";
import Today from "./components/sections/today/Today";
import Layout from "./components/main/Layout";
import { TasksProvider } from "./context/TaskProvider";
import Upcoming from "./components/sections/upcoming/Upcoming";
import Completed from "./components/sections/completed/Completed";

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
        </Routes>
      </Layout>
      </TasksProvider>
    </div>
  );
}

export default App;
