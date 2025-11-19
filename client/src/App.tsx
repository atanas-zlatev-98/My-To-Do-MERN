import "./App.css";
import { Routes, Route } from "react-router";
import Today from "./components/sections/today/Today";
import Layout from "./components/main/Layout";
function App() {
  return (
    <div className="main">
      <Layout>
        <Routes>
          {/* <Route path="/" element={<MainPage/>}></Route> */}
          <Route path="/today" element={<Today />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
