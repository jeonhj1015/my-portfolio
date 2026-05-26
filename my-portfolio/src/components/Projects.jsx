// 2026-05-20 생성
// 2026-05-20 수정 - inline style 제거, CSS 모듈로 전환
import { useState } from "react";
import styles from "./Projects.module.css";

const projectData = [
  {
    title: "GameCut",
    subtitle: "게임 명장면 커뮤니티 플랫폼",
    description:
      "릴스/숏츠 형식의 게임 명장면 영상 공유 플랫폼. 댓글, 커뮤니티, 웹게임, 랭킹 시스템을 갖춘 종합 게임 커뮤니티 서비스.",
    role: "게시글 목록/상세, 마이페이지, 아이템 상점, 웹게임 (티어맞추기 · 하이라이트 이상형월드컵), 관리자 페이지 담당",
    skills: [
      "React", "Redux Toolkit", "Spring Boot", "Spring Security",
      "JPA", "Oracle DB", "Redis", "JWT", "Docker", "AWS EC2",
      "WebSocket", "Three.js",
    ],
    links: {
      frontend: "https://github.com/Sonjulking/GameCut_final_frontend",
      backend: "https://github.com/Sonjulking/GameCut_final_backend",
      live: "https://gamecut.net",
    },
    team: true,
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles.card}
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        borderColor: hovered ? "#7ee8a2" : "#2a2a2a",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.cardTop}>
        <div>
          <div className={styles.titleRow}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            {project.team && (
              <span className={styles.teamBadge}>팀 프로젝트</span>
            )}
          </div>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>
        <div className={styles.linkGroup}>
          <a href={project.links.frontend} target="_blank" rel="noreferrer" className={styles.link}>
            Frontend
          </a>
          <a href={project.links.backend} target="_blank" rel="noreferrer" className={styles.link}>
            Backend
          </a>
          <a href={project.links.live} target="_blank" rel="noreferrer" className={styles.liveLink}>
            Live ↗
          </a>
        </div>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.roleBox}>
        <span className={styles.roleLabel}>담당 역할</span>
        <p className={styles.roleText}>{project.role}</p>
      </div>

      <div className={styles.tagGroup}>
        {project.skills.map((skill) => (
          <span key={skill} className={styles.tag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>PROJECTS</p>
        <h2 className={styles.title}>프로젝트</h2>
        <div className={styles.list}>
          {projectData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
