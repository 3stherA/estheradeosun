export default function HobbiesPage({ goHome }) {
    return (
      <div className="page-container">
        <div className="page-content">
          <h1>My Hobbies</h1>
          <p>Hobbies content coming soon...</p>
          <button className="back-button" onClick={goHome}>
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }