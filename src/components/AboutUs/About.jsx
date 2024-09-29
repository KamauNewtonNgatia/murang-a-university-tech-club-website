import missionImage from "../../assets/mission.jpeg";
import visionImage from "../../assets/vision.jpeg";
import objectivesImage from "../../assets/objectives.jpeg";
import valuesImage from "../../assets/values.jpeg";
import "./About.css";
function AboutUsCard({ icon, heading, paragraph }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={icon} alt={heading} />
      </div>
      <div className="card-content">
        <h2 className="heading-text">{heading}</h2>
        <p className="paragraph-text">{paragraph}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about-us-section">
      <div className="about-container">
        <AboutUsCard
          icon={missionImage}
          heading="Mission"
          paragraph="Murang'a University Tech Club (MUTC) empowers students by fostering innovation, enhancing tech skills, and promoting collaborative learning in programming, UI/UX design, cybersecurity, and cutting-edge technologies."
        />
      </div>

      <div className="about-container">
        <AboutUsCard
          icon={visionImage}
          heading="Vision"
          paragraph="To inspire innovation, collaboration, and technological excellence among students, fostering a community that empowers members to develop cutting-edge skills, share knowledge, and create impactful solutions for the future."
        />
      </div>

      <div className="about-container">
        <AboutUsCard
          icon={objectivesImage}
          heading="Objectives"
          paragraph="To equip members with practical tech skills, promote collaborative projects, enhance problem-solving capabilities, and create networking opportunities that prepare students for leadership roles in the tech industry."
        />
      </div>

      <div className="about-container">
        <AboutUsCard
          icon={valuesImage}
          heading="Values"
          paragraph="Innovation, collaboration, integrity, and inclusivity. MUTC values fostering creativity, teamwork, ethical practices, and equal opportunities for all members, driving technological advancements and personal growth within a supportive community."
        />
      </div>
    </section>
  );
}

export default About;
