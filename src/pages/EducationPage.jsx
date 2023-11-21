import "./EducationPage.css";
import MSIT from "../assets/MSIT.jpg";
import ipis from "../assets/ipis.jpg";

const EducationPage = () => {
  return (
    <>
      <main className="education">
        <h1 className="education_heading">Education</h1>
        <div className="college">
          <ul className="college-details">
            <li>
              <img src={MSIT} />
            </li>
            <li className="college_element">
              <h1>Bachelor of Technology</h1>
              <h2>Maharaja Surajmal Institue of Technology</h2>
              <div className="location-date">
                <p>11/2022 - Present </p>
                <p>New Delhi, India</p>
              </div>
              <div className="courses">
                <p>Courses</p>
                <h4>- Computer Science Engineering </h4>
              </div>
            </li>
          </ul>
        </div>
        <div className="high_school">
          <ul className="high_school_details">
            <li>
              <img src={ipis} />
            </li>
            <li className="school_element">
              <h1>12th (Non-Medical)</h1>
              <h2>Indraprastha International School</h2>
              <div className="location-date">
                <p>04/2021 - 04/2022 </p>
                <div>
                  <p>New Delhi, India</p>
                  <p>94.2%</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default EducationPage;
