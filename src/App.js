import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
