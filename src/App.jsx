// import logo from './logo.svg';
import './App.css';
import BasicExample from './components/Navigation/Navbar';
import Banner from './components/Navigation/Banner';
import { Skill } from './components/Navigation/Skill';
import { Projects } from './components/Navigation/Project';
import { Footer } from './components/Navigation/Footer';
import { Education } from './components/Navigation/Education';
// import { Newsletter } from './components/Navigation/Newsletter';





function App() {
  return (
    <div className="App">
      <BasicExample />
      <Banner />
      <Skill />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
