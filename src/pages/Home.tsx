import React from "react";
import NavBar from "../components/layout/NavBar";
import GradientText from "../components/common/GradientText";

const Home: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="max-w-4xl flex justify-center items-center flex-col h-screen">
        <GradientText children="Hello!" className="text-5xl text-center" />
        <NavBar className="mt-5" />
        <img className="w-100 h-auto object-cover" src="https://lhfyyotobejfrsrxjlqr.supabase.co/storage/v1/object/sign/portfolio/me.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNTVkZTkxNS1mZjkzLTQ1NjktOGQ4NS0zOTNjYmE0ZjdhZjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vbWUucG5nIiwiaWF0IjoxNzY3ODYwODc1LCJleHAiOjE5MjU1NDA4NzV9.f5uR_MKYKkA5R6fNtiV8lvnmp150pW5xj5M4R13v6hc" />
        <p>Hi, I’m Nimantha Thennakoon</p>
        <p>Trainee Software Engineer | Passionate Developer</p>
      </div>
    </div>
  );
};

export default Home;
