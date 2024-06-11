import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/Introduction/Intro';
import Skills from './components/Skills/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
    </div>
  );
}

export default App;
