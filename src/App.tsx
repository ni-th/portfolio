import Home from "./pages/Home";
import LightRays from "./components/common/LightRays";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white rubik">
      {/* Background Light Rays */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Pages */}
        <div className="flex justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
