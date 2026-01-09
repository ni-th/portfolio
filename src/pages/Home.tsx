import React from "react";
import NavBar from "../components/layout/NavBar";
import GradientText from "../components/common/GradientText";
import { motion } from "motion/react";
import { FlaskRound } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-4xl w-full">
        <GradientText children="Hello!" className="text-5xl mt-5" />
        <NavBar className="mt-5" />
        <div className="flex flex-col items-center mt-10">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-100 h-auto object-cover"
            src="https://lhfyyotobejfrsrxjlqr.supabase.co/storage/v1/object/sign/portfolio/me.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNTVkZTkxNS1mZjkzLTQ1NjktOGQ4NS0zOTNjYmE0ZjdhZjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vbWUucG5nIiwiaWF0IjoxNzY3ODYwODc1LCJleHAiOjE5MjU1NDA4NzV9.f5uR_MKYKkA5R6fNtiV8lvnmp150pW5xj5M4R13v6hc"
          />
          <p className="mt-5 text-lg">Hi, I'm Nimantha Thennakoon</p>
          <p className="text-gray-600">
            Trainee Software Engineer | Passionate Developer
          </p>
          <div className="flex items-center justify-center mt-4 bg-sky-900/20 px-7 py-4 mx-2 rounded-3xl md:rounded-full gap-4">
            <motion.span
              animate={{
                rotate: 40,
                transition: {
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                },
              }}
            >
              <FlaskRound size={40} />
            </motion.span>
            <p> Currently brewing innovative solutions in my development laboratory...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
