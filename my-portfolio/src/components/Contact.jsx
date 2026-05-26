// 2026-05-20 생성
// 2026-05-20 수정 - inline style 제거, CSS 모듈로 전환
import styles from "./Contact.module.css";

const contacts = [
  {
    label: "Email",
    value: "mumu097@naver.com",
    href: "mailto:mumu097@naver.com",
    icon: "✉️",
  },
  {
    label: "GitHub",
    value: "github.com/jeonhj1015",
    href: "https://github.com/jeonhj1015",
    icon: "🐙",
  },
  {
    label: "Notion",
    value: "포트폴리오 노션 페이지",
    href: "https://www.notion.so/23095fc6ba99801995eaf3a29f030b5b",
    icon: "📋",
  },
];

function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>CONTACT</p>
        <h2 className={styles.title}>연락처</h2>
        <p className={styles.desc}>
          새로운 기회나 협업 제안은 언제든 환영합니다.
          <br />
          편하게 연락해 주세요 😊
        </p>
        <div className={styles.cardGroup}>
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              <span className={styles.icon}>{item.icon}</span>
              <div>
                <p className={styles.cardLabel}>{item.label}</p>
                <p className={styles.cardValue}>{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          © 2026 전희재 · Designed & Built by 전희재
        </p>
      </div>
    </section>
  );
}

export default Contact;
