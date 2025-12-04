import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Experiences from './Components/Experiences';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ProjectsHeading from './Components/ProjectsHeading';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Experiences></Experiences>
      <Skills />
      <ProjectsHeading></ProjectsHeading>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
