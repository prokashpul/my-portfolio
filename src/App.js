import { Route, Routes } from "react-router-dom";
import Header from "../src/components/sheared/Header/Navbar";
import Footer from "./components/sheared/Footer/Footer";
import MobileNav from "./components/sheared/Header/MobileNav";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header></Header>
      <div className="overflow-hidden">
        <MobileNav></MobileNav>
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
