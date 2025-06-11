// =======================
// Imports
// =======================
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// Image imports
import { cameraImages } from "./assets/images/cameraRoll";
import headshot from "./assets/images/pfp.png";

// =======================
// Main Component
// =======================
function App() {
  // Clock state
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Camera roll image state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cameraImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Currently state

  const currentMessages = [
    "working on this portfolio",
    "Working as a Web Application Developer",
    "learning a new song on the guitar",
    "catching up on sleep"
  ];
  
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsgIndex(
        (prev) => (prev + 1) % currentMessages.length
      );
    }, 4000); // change every 4 s
    return () => clearInterval(interval);
  }, []);
  
  

  // =======================
  // Render
  // =======================
  return (
    <div className="grid-page-wrapper">
      <div className="grid-container">
        
        {/* Box A – Headshot */}
        <div className="box box-a">
          <img
            src={headshot}
            alt="Esther Adeosun"
            className="box-a-image"
          />
        </div>

        {/* Box B – About Me */}
        <div className="box box-b">
          <p className="about-paragraph">
            <span className="about-intro">Hi! I'm Esther,</span><br /><br />
            A Software Engineering student at the University of Guelph who’s passionate about 
            building things that actually matter to people. In a digital age where we spend so 
            much of our lives behind screens, I’m intentional about creating tools that encourage 
            connection, growth, and joy, not just more noise. Whether it’s a mobile app to make 
            daily life smoother, a script to ease someone’s workload, or a dashboard that brings 
            clarity, I’m drawn to using tech in ways that are thoughtful, helpful, and human. 
            I’m especially interested in mobile development, automation, and data—areas where 
            software can quietly make life more meaningful. Long term, I hope to become a 
            professor so I can keep learning, teaching, and pouring into others. For me, coding 
            isn’t just a technical skill, it’s a way to serve with purpose.
          </p>
        </div>

        {/* Box C – Menu */}
        <div className="box box-c">
          <button
            className="menu-item"
            onClick={() =>
              window.open("/estheradeosun/Esther_Adeosun_Resume.pdf", "_blank")
            }
          >
            Resume
          </button>
          <button className="menu-item">Projects</button>
          <button className="menu-item">Contact</button>
          <button className="menu-item">Hobbies</button>
        </div>

        {/* Box D – Clock, Contact, Camera Roll */}
        <div className="box box-d">
          
          {/* Left Side: W, Y, Z */}
          <div className="box-d-left">
            <div className="d-w">
              <div className="clock-time">
                {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
              </div>
            </div>

            <div className="box-y">
              <div className="box-y-left d-y">
                <h3>Coming soon...</h3>
              </div>

              <div className="box-y-right d-z">
                <h3>Currently...</h3>
                
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentMsgIndex} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="currently-message"
                  >
                    {currentMessages[currentMsgIndex]}
                  </motion.p>
                </AnimatePresence>

              </div>
            </div>
          </div>

          {/* Right Side: Camera Roll */}
          <div className="box-d-right">
            <div className="d-x">
              <img
                src={cameraImages[currentImageIndex]}
                alt="Camera Roll"
                className="camera-roll"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;