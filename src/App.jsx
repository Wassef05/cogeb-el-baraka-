
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hello from "./Components/Hello/Hello";
import Sponsors from "./Components/Sponsors/Sponsors";
import Popular from "./Components/Popular/Popular";
import Listing from "./Components/Listing/Listing";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import Historique from './Components/Historique/Historique';
import HelloTwo from './Components/Hellotwo/Hello';
import ListingTwo from './Components/ListingTwo/Listing';
import ImageCarousel from './Components/ImagesCar/ImageCar';
import Hellothree from './Components/Hellothree/Hello';
import WhyCogeb from './Components/WhyCogeb/WhyCogeb';

function App() {

  return (
    <>
      <Navbar/>
      <Hello/>
      <Hellothree/>
      <ListingTwo/>
      <WhyCogeb/>
    
       {/* <Popular/>  */}
       {/* <Historique/> */}
       <Listing/>
   
    
      {/* <About/> */}
       <Contact/>
       
      
      <Subscribe/> 
      {/* <Sponsors/> */}

      <Footer/>
    </>
  )
}

export default App
