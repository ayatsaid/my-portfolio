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
        <div>
            <Header />
            <Mainbar />
            <AboutMe />
            <Service />
            <SkillsSection />
            <Resume />
            <Footer />
        </div>
    )
}

export default App;