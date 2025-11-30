import styles from "./App.module.css";
import {Hero} from "./components/Hero/Hero"
import {Navbar} from "./components/Navbar/Navbar";
import {Contact} from "./components/Contact/Contact";
import {Projects} from "./components/Projects/Projects";
import {Experience} from "./components/Experience/Experience";
import {Education} from "./components/Education/Education";
import {Skills} from "./components/Skills/Skills"; // Import Skills
import {ScrollToTop} from "./components/ScrollToTop/ScrollToTop";
import {RevealOnScroll} from "./components/RevealOnScroll/RevealOnScroll";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>

            <Navbar/>

            <Hero/>

            <RevealOnScroll>
                <Skills/>
            </RevealOnScroll>

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