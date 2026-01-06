import { useState, useEffect } from "react";
import "./App.css";
import { cameraImages } from "./assets/images/cameraRoll";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import HobbiesPage from "./components/HobbiesPage";
import HomePage from "./pages/HomePage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [time, setTime] = useState(new Date());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);

  const currentMessages = [
    "Updating this Portfolio",
    "Working as a Web Application Developer",
    "Living in Toronto",
    "Getting ready to launch my app on the App Store",
    "Learning a New Song on the Guitar",
  ];

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const img = setInterval(() => setCurrentImageIndex(i => (i + 1) % cameraImages.length), 6000);
    return () => clearInterval(img);
  }, []);

  useEffect(() => {
    const msg = setInterval(() => setCurrentMsgIndex(i => (i + 1) % currentMessages.length), 4000);
    return () => clearInterval(msg);
  }, []);

  // Render page
  if (currentPage === "projects") return <ProjectsPage goHome={() => setCurrentPage("home")} />;
  if (currentPage === "contact") return <ContactPage goHome={() => setCurrentPage("home")} />;
  if (currentPage === "Internships") return <HobbiesPage goHome={() => setCurrentPage("home")} />;

  return (
    <HomePage
      time={time}
      currentMsg={currentMessages[currentMsgIndex]}
      currentImage={cameraImages[currentImageIndex]}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default App;