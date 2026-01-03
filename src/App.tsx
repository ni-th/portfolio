import Home from "./pages/Home";
import NavBar from "./components/layout/NavBar";
import LightRays from "./components/common/LightRays";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import GradientText from "./components/common/GradientText";

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
        <div className="text-center py-10">
          <GradientText
            children="Hello, Welcome"
            className="text-7xl text-center"
          />
        </div>

        {/* Navbar */}
        <div className="sticky top-5 z-50">
          <NavBar />
        </div>

        {/* Pages */}
        <div className="flex justify-center mx-5">
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
