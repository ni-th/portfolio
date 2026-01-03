import React from "react";
import ShinyText from "../components/common/ShinyText";
import ScrollFloat from "../components/common/ScrollFloat";

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl flex justify-center items-center flex-col mt-5">
      <ShinyText 
        text="Hello, Welcome" 
        className="text-7xl text-center" 
      />
      
      <p>Hi, I'm Nimantha Bandara Thennakoon, a passionate software developer with experience in 
React, Angular, Spring Boot, PHP, and Java. I enjoy building interactive web applications 
and exploring new technologies. 
      </p>
      
      <div className="h-20 pb-10">
        <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        React Bits
      </ScrollFloat>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, excepturi aut. Ut animi impedit voluptas hic sequi vitae corrupti, itaque incidunt nobis inventore aliquid labore provident? Tempore sunt veniam molestias.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sit aliquam ratione dolore unde laudantium cupiditate pariatur consequuntur recusandae repellendus similique quidem, illo nam, molestiae debitis. Corporis earum voluptatum possimus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos beatae adipisci, nesciunt quos eum corrupti, in et velit officia quisquam dignissimos molestiae dolores quam, placeat porro. Ullam, error cum?
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, excepturi aut. Ut animi impedit voluptas hic sequi vitae corrupti, itaque incidunt nobis inventore aliquid labore provident? Tempore sunt veniam molestias.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sit aliquam ratione dolore unde laudantium cupiditate pariatur consequuntur recusandae repellendus similique quidem, illo nam, molestiae debitis. Corporis earum voluptatum possimus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos beatae adipisci, nesciunt quos eum corrupti, in et velit officia quisquam dignissimos molestiae dolores quam, placeat porro. Ullam, error cum?
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, excepturi aut. Ut animi impedit voluptas hic sequi vitae corrupti, itaque incidunt nobis inventore aliquid labore provident? Tempore sunt veniam molestias.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sit aliquam ratione dolore unde laudantium cupiditate pariatur consequuntur recusandae repellendus similique quidem, illo nam, molestiae debitis. Corporis earum voluptatum possimus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos beatae adipisci, nesciunt quos eum corrupti, in et velit officia quisquam dignissimos molestiae dolores quam, placeat porro. Ullam, error cum?
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, excepturi aut. Ut animi impedit voluptas hic sequi vitae corrupti, itaque incidunt nobis inventore aliquid labore provident? Tempore sunt veniam molestias.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sit aliquam ratione dolore unde laudantium cupiditate pariatur consequuntur recusandae repellendus similique quidem, illo nam, molestiae debitis. Corporis earum voluptatum possimus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos beatae adipisci, nesciunt quos eum corrupti, in et velit officia quisquam dignissimos molestiae dolores quam, placeat porro. Ullam, error cum?
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, excepturi aut. Ut animi impedit voluptas hic sequi vitae corrupti, itaque incidunt nobis inventore aliquid labore provident? Tempore sunt veniam molestias.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sit aliquam ratione dolore unde laudantium cupiditate pariatur consequuntur recusandae repellendus similique quidem, illo nam, molestiae debitis. Corporis earum voluptatum possimus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos beatae adipisci, nesciunt quos eum corrupti, in et velit officia quisquam dignissimos molestiae dolores quam, placeat porro. Ullam, error cum?
      </p>
      
      
      
    </div>
  );
};

export default Home;
