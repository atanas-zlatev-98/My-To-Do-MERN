import "./App.css";
import { Routes, Route } from "react-router";
import Today from "./components/sections/today/Today";
import Layout from "./components/main/Layout";
import { TasksProvider } from "./context/TaskProvider";

function App() {
  return (
    <div className="main">
      <TasksProvider>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<MainPage/>}></Route> */}
          <Route path="/" element={<Today />}></Route>
        </Routes>
      </Layout>
      </TasksProvider>
    </div>
  );
}

export default App;
