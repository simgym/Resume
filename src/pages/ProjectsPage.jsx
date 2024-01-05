import ADVi from "../assets/ADVi.jpg";
import seventyfivehard from "../assets/seventyfivehard.jpg";
import weather from "../assets/weather.jpg";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <>
      <main>
        <h1 className="projects_headings">Projects</h1>
        <div className="ADVi">
          <div className="project">
            <a
              href="https://advi-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ADVi} alt="ADVi" className="project-image" />
            </a>
            <div className="project-description">
              <h2>ADVi</h2>
              <ul className="description_list">
                <li>
                  Developed using REST APIs, offering a comprehensive
                  experience.
                </li>
                <li>
                  Showcases trending, upcoming, top-rated movies, TV shows, and
                  celebrity spotlights.{" "}
                </li>
                <li>
                  Enhances user experience by suggesting similar movies or shows
                </li>
                <li>
                  Enables secure user authentication and data storage, including
                  comments in a real-time database.
                </li>
              </ul>
              <p className="project-skills">
                JavaScript, ReactJS, Redux, Redux toolkit, Firebase, REST APIs,
                CSS, HTML
              </p>
            </div>
          </div>
          <div className="project">
            <a
              href="https://seventy-five-hard-murex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={seventyfivehard}
                alt="75 Hard"
                className="project-image"
              />
            </a>
            <div className="project-description">
              <h2>75 Hard</h2>
              <ul className="description_list">
                <li>
                  Utilizes React, Redux, Firebase, and React Router for a robust
                  foundation.{" "}
                </li>
                <li>
                  Ensures secure login/signup through Firebase Authentication.{" "}
                </li>
                <li>
                  Utilizes an interactive graph for visualizing daily progress.{" "}
                </li>
                <li>
                  Provides a user-friendly experience across both desktop and
                  mobile devices.
                </li>
              </ul>
              <p className="project-skills">
                JavaScript, ReactJS, Redux, Redux toolkit, Firebase, CSS, HTML
              </p>
            </div>
          </div>
          <div className="project">
            <a
              href="https://weather-app-bb4h.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={weather} alt="Weatheria" className="project-image" />
            </a>
            <div className="project-description">
              <h2>Weatheria</h2>
              <ul className="description_list">
                <li>
                  Real-time updates on temperature, conditions, and more for
                  selected cities.
                </li>
                <li>
                  Smart search with auto-suggestions for precise location
                  selection.
                </li>
                <li>
                  Seamless rendering of city search dropdown for an elegant user
                  experience.{" "}
                </li>
                <li>
                  Fully responsive for a consistent and enjoyable experience on
                  various devices.
                </li>
              </ul>
              <p className="project-skills">
                JavaScript, ReactJS, Redux, Redux toolkit, REST API, CSS, HTML
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
