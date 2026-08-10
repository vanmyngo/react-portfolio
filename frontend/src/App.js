import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Hero from './components/Hero';
import Language from './components/Language';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Hero />
      <About />
      <Language />
      <Project /> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;