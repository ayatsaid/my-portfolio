// App.jsx
import Mainbar from './components/layout/Mainbar'
import Header from './components/layout/Header'
import AboutMe from './components/layout/AboutMe'
import Service from './components/layout/Service'
import SkillsSection from './components/layout/SkillSection'
import Resume from './components/layout/Resume'
import Footer from './components/layout/Footer'
import './index.css'


function App() {
    return (
        <div className="scroll-smooth">
            <Header />
            <section id="home"><Mainbar /></section>
            <section id="about"><AboutMe /></section>
            <section id="portfolio"><Service /></section>
            <section id="skills"><SkillsSection /></section>
            <section id="resume"><Resume /></section>
            <section id="contact"><Footer /></section>
        </div>
    )
}

export default App;