import './App.css';
import AboutMe from './components/about/about';
// import Hackathons from './components/hackathons/hackathon';
import HomeComponent from './components/home/home';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="body">
      <HomeComponent></HomeComponent>
      <AboutMe></AboutMe>
      <Project></Project>
      {/* <Hackathons></Hackathons> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
