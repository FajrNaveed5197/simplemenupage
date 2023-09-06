import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <MainContent></MainContent>
    <Footer></Footer>
   </div>
  )
}

export default App;
