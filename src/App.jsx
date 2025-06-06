// =======================
// Imports
// =======================
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

// Image imports
import cruise from "./assets/images/cameraRoll/cruise.jpg";
import montanas from "./assets/images/cameraRoll/montanas.jpg";
import headshot from "./assets/images/headshot1.png";

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
  const cameraImages = [cruise, montanas];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cameraImages.length);
    }, 6000);

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
            <span className="about-intro">Hi! I'm Esther.</span><br /><br />
            I’m a Software Engineering student at the University of Guelph with a deep love for learning and building.
            I’m especially drawn to mobile app development, automation, and data analytics — areas where I can create
            tools that make life simpler, more meaningful, or more joyful. I’m passionate about using technology to
            support real people in real ways, and I ultimately hope to become a professor so I can keep learning, teaching,
            and pouring into others. For me, coding is not just a skill — it’s a way to serve.
          </p>
        </div>

        {/* Box C – Menu */}
        <div className="box box-c">
          <button className="menu-item">Resume</button>
          <button className="menu-item">Projects</button>
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
                <h3>Contact Me</h3>
                <p>
                  Email <br></br><a href="mailto:3stherade@gmail.com">3stherade@gmail.com</a><br />
                  Socials <br></br><a href="mailto:3stherade@gmail.com">3stherade@gmail.com</a><br />

                </p>
              </div>

              <div className="box-y-right d-z">
                <h3>Currently...</h3>
                <p>Working on this portfolio 🚀</p>
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