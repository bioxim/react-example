import './App.css';
import Contact from './components/Contact';
import Container from './components/Container';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
