import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Display } from "./Display/display";
import ProgramDetails from "./Display/ProgramDetails/ProgramDetails";
import FooterContents from "./Display/Footer/FooterContents";
import { NavBar } from "./Display/NavBar/navBar";

function App() {
  return (
    <>
      <div className="w-full">
        <NavBar />
      </div>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/programdetails/:id" element={<ProgramDetails />} />
        </Routes>
      <FooterContents />
    </>
  );
}
export default App;
