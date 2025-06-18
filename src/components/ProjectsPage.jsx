import "./ProjectsPage.css";
import transportImg from "../assets/images/transport-scheduler-homepage.png";

export default function ProjectsPage({ goHome }) {
  const projects = [
    {
      id: 1,
      name: "Transportation Scheduler",
      techStack: "Python, React, JavaScript, HTML/CSS",
      description: "Every Sunday, families, students, and volunteers in our church community needed a reliable ride, but coordinating all those moving pieces manually was time-consuming and error-prone. I built a smart scheduler that took over the heavy lifting: it pulls ride requests directly from a Google Form, calculates travel distances using Google Maps, and matches riders with volunteer drivers based on route proximity and seat availability. The result? A fully automated system that produces optimized weekly rosters in minutes instead of hours, giving organizers more time to focus on what matters.",
      githubLink: "https://github.com/3stherA",
      image: transportImg
    },
    {
      id: 2,
      name: "BudgetIt", 
      techStack: "React, JavaScript, HTML/CSS",
      description: "Between tuition, textbooks, groceries, and the occasional coffee, managing student life expenses can feel like a full-time job. So, I created a budgeting tool designed for students like me.. simple, intuitive, and focused. Built with React and real-time state management, this tracker helps users monitor spending across customizable categories and stay on top of their financial goals. It’s a small project with a big purpose: putting financial clarity within reach, one line item at a time.",
      githubLink: "https://github.com/3stherA",
      image: "/path/to/project2-image.jpg"
    },
    {
      id: 3,
      name: "Project Name 3",
      techStack: "..",
      description: "Description stub",
      githubLink: "https://github.com/3stherA", 
      image: "/path/to/project3-image.jpg"
    }
  ];

  return (
    <div className="projects-content">
      <h1>My Projects</h1>
      
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-container">
            <div className="project-left">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-tech-stack">{project.techStack}</p>
              <p className="project-description">{project.description}</p>
              <a 
                //href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                <span className="github-icon">📁</span>
                View on GitHub
              </a>
            </div>
            <div className="project-right">
              <img 
                src={project.image} 
                alt={`${project.name} screenshot`}
                className="project-image"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={goHome}>
        ← Back to Home
      </button>
    </div>
  );
}