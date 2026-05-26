// 2026-05-20 생성
// 2026-05-20 수정 - inline style 제거, CSS 모듈로 전환
import { useState } from "react";
import styles from "./Skills.module.css";

const skillData = [
  { category: "언어", color: "#7ee8a2", skills: ["Java", "JavaScript"] },
  { category: "백엔드", color: "#60c0ff", skills: ["Servlet & JSP", "Spring", "MyBatis", "JPA"] },
  { category: "프론트엔드", color: "#f0a0ff", skills: ["HTML", "CSS", "JavaScript", "jQuery", "Ajax", "React"] },
  { category: "데이터베이스", color: "#ffcc60", skills: ["MySQL", "Oracle DB", "Firebase"] },
  { category: "인프라", color: "#ff8060", skills: ["Docker", "AWS"] },
];

function SkillCard({ group }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles.card}
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        borderColor: hovered ? group.color : "#2a2a2a",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className={styles.category} style={{ color: group.color }}>
        {group.category}
      </h3>
      <div className={styles.tagGroup}>
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={styles.tag}
            style={{ borderColor: group.color, color: group.color }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>SKILLS</p>
        <h2 className={styles.title}>기술 스택</h2>
        <div className={styles.grid}>
          {skillData.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
