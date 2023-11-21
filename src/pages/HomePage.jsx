import "./HomePage.css";
import profile from "../assets/profile.jpg";

const HomePage = () => {
  return (
    <>
      <main className="homepage_details">
        <ul className="important_table">
          <li>
            <img src={profile} alt="Profile" className="profile_image" />
          </li>
          <li>
            <div className="about_me">
              <h1>Hello,</h1>
              <h2 className="hello">a bit about me:</h2>
              <h3 className="interests_details">Interests</h3>
              <ul>
                <li className="sketching">Sketching</li>
                <li className="chess">chess</li>
                <li className="video_games">Video Games</li>
              </ul>
              <div>
                <p className="my_description">
                  Passionate React developer dedicated to crafting exceptional
                  web experiences. Proficient in React.js, JavaScript, and
                  Redux, I have a knack for creating seamless and dynamic
                  solutions. I thrive on building user-centric interfaces that
                  elevate the overall experience.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div>
          <h2 className="skills">Skills</h2>
          <ul className="skill_set">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Firebase</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>C++</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default HomePage;
