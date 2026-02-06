import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Services from './sections/Services/Services';
import Quote from './sections/Quote/Quote';
import Achievements from './sections/Achievements/Achievements';
import Workshops from './sections/Workshops/Workshops';
import Timeline from './sections/Timeline/Timeline';
import Certificates from './sections/Certificates/Certificates';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Quote />
        <Achievements />
        <Workshops />
        <Timeline />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
