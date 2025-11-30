import styles from "./App.module.css";
import {Hero} from "./components/Hero/Hero"
import {Navbar} from "./components/Navbar/Navbar";
import {Contact} from "./components/Contact/Contact";
import {Projects} from "./components/Projects/Projects";
import {Experience} from "./components/Experience/Experience";
import {Education} from "./components/Education/Education";
import {ScrollToTop} from "./components/ScrollToTop/ScrollToTop";
import {RevealOnScroll} from "./components/RevealOnScroll/RevealOnScroll"; // Import wrapper
import {Footer} from "./components/Footer/Footer"; // Import footer

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      <Navbar />

        {/* Hero usually doesn't need reveal animation as it's visible on load,
          but you can wrap it if you want it to fade in too.
          Usually, we leave Hero instant. */}
      <Hero />

        <RevealOnScroll>
            <Projects/>
        </RevealOnScroll>

        <RevealOnScroll>
            <Experience/>
        </RevealOnScroll>

        <RevealOnScroll>
            <Education/>
        </RevealOnScroll>

        <RevealOnScroll>
            <Contact/>
        </RevealOnScroll>

        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default App