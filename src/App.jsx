import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Display } from "./Display/display";
import ProgramDetails from "./Display/ProgramDetails/ProgramDetails";
import FooterContents from "./Display/Footer/FooterContents";
import { NavBar } from "./Display/NavBar/navBar";
import Login from "./Display/Loign/Login";

function App() {
  return (
    <div className="bg-black">
      
      <div className="w-full">
        <NavBar />
      </div>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/programdetails/:id" element={<ProgramDetails />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      <FooterContents />
    </div>
  );
}
export default App;
