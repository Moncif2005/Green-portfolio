import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <div className="home">
      <nav>
        <h3>Portfolio.</h3>
        <ul className={isNavOpen ? "nav-open" : ""}>
          <li>Home</li>
          <li>About me</li>
          <li>My work</li>
          <li className="active">Contact</li>
        </ul>
        {isNavOpen ? (
          <FaTimes className="bar" onClick={toggleNav} />
        ) : (
          <FaBars className="bar" onClick={toggleNav} />
        )}
      </nav>

      <div className="main">
        <div className="text-img">
           <img 
            src="../public/Rectangle 36.png" 
            alt="Portfolio"  
             />
             
           <div className="potfolio-text">
             <h3>Portfolio</h3>
                <div className="main-text">
                   <h2>folio</h2>
                   <h2>folio</h2>
                   <h2>folio</h2>
                </div>
           </div>
        </div>
           
           <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
               Sed non risus. Suspendisse lectus tortor, dignissim sit amet,<br/>
               adipiscing. 
           </p>
        
      </div>
    </div>
  );
};

export default Home;
