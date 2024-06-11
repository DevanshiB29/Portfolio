import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/Introduction/Intro';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
    </div>
  );
}

export default App;
