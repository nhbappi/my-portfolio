
import './App.css';
import Home from './Component/Home';
import About from './Component/About/About';
import Service from './Component/Services/Service';
import Projects from './Component/Projects/Projects';
import Blogs from './Component/Blog/Blogs';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Skills from './Component/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Service></Service>
      <Projects></Projects>
      <Skills></Skills>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
