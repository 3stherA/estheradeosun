import headshot from "../assets/images/pfp.png";
import { cameraImages } from "../assets/images/cameraRoll";

export default function HomePage({ time, currentMsg, currentImage, setCurrentPage }) {
  return (
    <div className="grid-page-wrapper">
      <div className="grid-container">
        <div className="box box-a">
          <img src={headshot} alt="Esther Adeosun" className="box-a-image" />
        </div>

        <div className="box box-b">
          <p className="about-paragraph">
            <span className="about-intro">Hi! I'm Esther,</span><br /><br />
            A Software Engineering student at the University of Guelph who's passionate about 
            building things that actually matter to people. In a digital age where we spend so 
            much of our lives behind screens, I'm intentional about creating tools that encourage 
            connection, growth, and joy, not just more noise. Whether it's a mobile app to make 
            daily life smoother, a script to ease someone's workload, or a dashboard that brings 
            clarity, I'm drawn to using tech in ways that are thoughtful, helpful, and human. 
            I'm especially interested in mobile development, automation, and data—areas where 
            software can quietly make life more meaningful. Long term, I hope to become a 
            professor so I can keep learning, teaching, and pouring into others. For me, coding 
            isn't just a technical skill, it's a way to serve with purpose.
          </p>
        </div>

        <div className="box box-c">
          <button className="menu-item" onClick={() => window.open("/estheradeosun/Esther_Adeosun_Resume.pdf", "_blank")}>
            Resume
          </button>
          <button className="menu-item" onClick={() => setCurrentPage("projects")}>
            Projects
          </button>
          <button className="menu-item" onClick={() => setCurrentPage("contact")}>
            Contact
          </button>
          <button className="menu-item" onClick={() => setCurrentPage("hobbies")}>
            Hobbies
          </button>
        </div>

        <div className="box box-d">
          <div className="box-d-left">
            <div className="d-w">
              <div className="clock-time">{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</div>
            </div>

            <div className="box-y">
              <div className="box-y-left d-y">
                <h3>Coming soon...</h3>
              </div>
              <div className="box-y-right d-z">
                <h3>Currently...</h3>
                <p className="currently-message">{currentMsg}</p>
              </div>
            </div>
          </div>

          <div className="box-d-right">
            <div className="d-x">
              <img src={currentImage} alt="Camera Roll" className="camera-roll" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}