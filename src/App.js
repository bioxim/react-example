import React, { useEffect } from 'react'
import './App.css'
import Container from './components/Container'
import Footer from './components/Footer'
import ReactGA from 'react-ga'

function App() {

  useEffect(() => {
    ReactGA.initialize('G-8NP4B9Q1VP')
    ReactGA.pageview('/')
  }, [])
  

  return (
    <div className="App">
      <Container />
      <Footer />
    </div>
  );
}

export default App;
