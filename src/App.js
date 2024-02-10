
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Experiance from './Component/Experiance/Experiance';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Nav from './Component/Navbar/Nav';
import Portfolio from './Component/Portfolio/Portfolio';
import Service from './Component/Servise/Service';
import Testimonials from './Component/Testimonials/Testimonials';


function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    {/* <Service/> */}
    <Portfolio/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
