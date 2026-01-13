import React from "react";
import NavBar from "../components/layout/NavBar";
import Card from "../components/common/Card";
import { motion } from "motion/react";
import BlurText from "../components/common/BlurText";
const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-4xl w-full my-5">
        <NavBar className="mt-5" />
        <div className="flex flex-col items-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="w-full h-auto object-cover"
              src="https://lhfyyotobejfrsrxjlqr.supabase.co/storage/v1/object/sign/portfolio/me.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iNTVkZTkxNS1mZjkzLTQ1NjktOGQ4NS0zOTNjYmE0ZjdhZjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vbWUucG5nIiwiaWF0IjoxNzY3ODYwODc1LCJleHAiOjE5MjU1NDA4NzV9.f5uR_MKYKkA5R6fNtiV8lvnmp150pW5xj5M4R13v6hc"
            />
            <Card title="Hello! I’m Nimantha">
              <BlurText
                text="A passionate software developer with a background in Physical Science and formal training in Software Engineering. I enjoy turning complex problems into clean, efficient code and building applications that make a difference."
                delay={150}
                animateBy="words"
                direction="top"
              />
            </Card>
          </div>

          <Card title="What I Do">
            <BlurText
              text="A passionate and detail-oriented software developer with hands-on experience in building dynamic web applications using React, Spring Boot, and Java. I specialize in creating interactive, user-friendly solutions and have a strong foundation in both frontend and backend development."
              delay={150}
              animateBy="words"
              direction="top"
            />
          </Card>

          <Card title="My Journey">
            <div className="mb-5">
              <h3 className="text-lg">University of Colombo (2022–2025)</h3>
              <p className="mb-3">Bachelor of Science in Physical Science</p>
              <ul className="list-disc">
                <li>
                  <BlurText
                    text="Specialized in Pure Mathematics, Applied Mathematics, Computer Science, and Statistics."
                    delay={150}
                    animateBy="words"
                    direction="top"
                  />
                </li>
                <li>
                  <BlurText
                    text="Graduated with a strong foundation in analytical thinking and technical analysis and also Computer Science."
                    delay={150}
                    animateBy="words"
                    direction="top"
                  />
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg">ICET (2024–2025)</h3>
              <p className="mb-3">Diploma in Software Engineering</p>
              <ul className="list-disc">
                <li>
                  <BlurText
                    text="Intensive practical training in software development."
                    delay={150}
                    animateBy="words"
                    direction="top"
                  />
                </li>
                <li>
                  <BlurText
                    text="Currently building real-world projects using industry-standard practices."
                    delay={150}
                    animateBy="words"
                    direction="top"
                  />
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
