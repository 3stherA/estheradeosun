import "./ProjectsPage.css"; // Optional: new CSS file for this page

export default function ProjectsPage({ goHome }) {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>My Projects</h1>
        <p>Projects content coming soon...</p>
        <button className="back-button" onClick={goHome}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}