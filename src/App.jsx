import styles from "./App.module.css";
import {Hero} from "./components/Hero/Hero"
import {Navbar} from "./components/Navbar/Navbar";
import {About} from "./components/About/About";
import {Contact} from "./components/Contact/Contact";
import {Projects} from "./components/Projects/Projects";
import {Experience} from "./components/Experience/Experience";
import {Education} from "./components/Education/Education";
import {Skills} from "./components/Skills/Skills";
import {ScrollToTop} from "./components/ScrollToTop/ScrollToTop";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>

            <Navbar/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Education/>
            <Contact/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}

export default App