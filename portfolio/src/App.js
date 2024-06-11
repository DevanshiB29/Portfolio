import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Intro from './components/Introduction/Intro';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
    </div>
  );
}

export default App;
