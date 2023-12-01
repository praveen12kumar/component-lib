import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Installation from "./pages/installation/Installation";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./installation" element={<Installation/>} />
      </Routes>
      <Footer />
    </div>
  );
}
