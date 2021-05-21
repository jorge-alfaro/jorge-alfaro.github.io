import { getSkillsByType } from "../../selectors/getSkillsByType";

export const SectionSkills = ({ type }) => {
  const skill = getSkillsByType(type);
  return (
    <section className="section-c">
      <div className="container-section">
        <div className="title-center">
          <h2 tabIndex="8">SKILLS</h2>
        </div>
        <div className="skills-container">
          {skill.map((logo) => (
            <div key={logo.id} className="skill">
              <div className="thumb">
                <img src={`./assets/skills/${logo.id}.svg`} alt={logo.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
