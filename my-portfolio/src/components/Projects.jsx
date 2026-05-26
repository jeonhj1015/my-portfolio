// 2026-05-20 생성
// 2026-05-20 수정 - inline style 제거, CSS 모듈로 전환
// 2026-05-26 수정 - Frontend/Backend 링크에 GitHub 아이콘 추가
import { useState } from "react";
import styles from "./Projects.module.css";

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ flexShrink: 0 }}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const projectData = [
  {
    title: "GameCut",
    subtitle: "게임 명장면 커뮤니티 플랫폼",
    description:
      "릴스/숏츠 형식의 게임 명장면 영상 공유 플랫폼. 댓글, 커뮤니티, 웹게임, 랭킹 시스템을 갖춘 종합 게임 커뮤니티 서비스.",
    role: "게시글 목록/상세, 마이페이지, 아이템 상점, 웹게임 (티어맞추기 · 하이라이트 이상형월드컵), 관리자 페이지 담당",
    skills: [
      "React",
      "Redux Toolkit",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "Oracle DB",
      "Redis",
      "JWT",
      "Docker",
      "AWS EC2",
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
          <a
            href={project.links.frontend}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <GitHubIcon /> Frontend
          </a>
          <a
            href={project.links.backend}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <GitHubIcon /> Backend
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className={styles.liveLink}
          >
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
