import { Route, Routes } from "react-router-dom";
import Header from "../src/components/sheared/Header/Navbar";
import MobileNav from "./components/sheared/Header/MobileNav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <MobileNav></MobileNav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
