import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SkillCard from '../../components/SkillCard/SkillCard';
import { skills, tools } from '../../data/skills';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <SectionTitle
                    title="Skills & Expertise"
                    subtitle="What I Do"
                />

                <div className="skills-content">
                    <div className="skills-category">
                        <h3 className="category-title">Technical Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3 className="category-title">Tools & Technologies</h3>
                        <div className="skills-grid">
                            {tools.map((tool, index) => (
                                <SkillCard key={index} skill={tool} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
