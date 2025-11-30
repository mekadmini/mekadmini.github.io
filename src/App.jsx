import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education";

function App() {
  return (
    <div className={styles.App}>
      {/* Ambient Backgrounds */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default App