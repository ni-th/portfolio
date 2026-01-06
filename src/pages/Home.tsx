import React from "react";
import NavBar from "../components/layout/NavBar";
import GradientText from "../components/common/GradientText";

const Home: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="max-w-4xl flex justify-center items-center flex-col h-screen">
        <GradientText children="Hi, I'm Nimantha" className="text-5xl text-center" />
        <NavBar className="mt-5" />
        <img
          className="w-100 h-auto object-cover"
          src="src/assets/me 2.png"
        />
      </div>
    </div>
  );
};

export default Home;
