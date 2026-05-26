// 2026-05-20 수정 - Contact 컴포넌트 추가, 포트폴리오 전체 섹션 완성
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
