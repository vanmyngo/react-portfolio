import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Hero from './components/Hero';
import Language from './components/Language';
import NavBar from './components/NavBar';
import Project from './components/Project';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <NavBar />
        <Hero />
        <About />
        <Language />
        <Project /> 
      </BrowserRouter>
    </div>
  );
}

export default App;