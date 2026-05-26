// 2026-05-20 생성
// 2026-05-20 수정 - inline style 제거, CSS 모듈로 전환 + 모바일 햄버거 메뉴 추가
import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.logo}>HeeJae.dev</span>

        {/* 데스크탑 네비 */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* 햄버거 버튼 (모바일) */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
