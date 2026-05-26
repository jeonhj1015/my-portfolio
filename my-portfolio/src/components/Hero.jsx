// 2026-05-20 생성
// 2026-05-20 수정 - inline style 제거, CSS 모듈로 전환
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className={styles.section}>
      <div
        className={styles.content}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <p className={styles.greeting}>안녕하세요 👋</p>
        <h1 className={styles.name}>
          저는 <span className={styles.highlight}>전희재</span>입니다
        </h1>
        <p className={styles.subtitle}>
          백엔드 개발자를 목표로 성장 중인 주니어 개발자입니다.
          <br />
          문제를 해결하는 코드를 만드는 걸 좋아합니다.
        </p>
        <div className={styles.buttonGroup}>
          <a href="#projects" className={styles.primaryBtn}>
            프로젝트 보기
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
