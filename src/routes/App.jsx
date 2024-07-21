import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <div className="container">
      <Header></Header>
      <div className="content">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    </div>
    </>
  );
}

export default App;
