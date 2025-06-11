export default function ContactPage({ goHome }) {
    return (
      <div className="page-container">
        <div className="page-content">
          <h1>Contact Me</h1>
          <p>Contact info coming soon...</p>
          <button className="back-button" onClick={goHome}>
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  