import Home from "./pages/Home";
import LightRays from "./components/common/LightRays";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="relative h-full text-white rubik">
      <div className="absolute top-0 inset-x-0 z-0 pointer-events-none h-full overflow-x-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={1.5}
          rayLength={5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Foreground Content */}
      
        {/* Pages */}
        <div className="relative z-10 h-full flex justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </div>
    </div>
  );
};

export default App;
