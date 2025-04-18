import HeaderBar from "./Componens/HeaderBar.jsx";
import NavBar from "./Componens/NavBar.jsx";
import Home from "./Componens/Home.jsx";
import Services from "./Componens/Services.jsx";
import About from "./Componens/About.jsx";
import Contact from "./Componens/Contact.jsx";
import Footer from "./Componens/Footer.jsx";
import "./Componens/i18n.js"; // i18n inicializálása
import OpeningHours from "./Componens/OpeningHours.jsx";

function App() {
    return (
      <>
        <HeaderBar/>
        <NavBar/>
        <Home/>
        <div style={{position: "relative", top: "8rem", zIndex: 99}}>
          <About/>
        </div>
        <Services/>
          <Contact />
          <OpeningHours /> 
        <Footer />
      </>
    )
  }
export default App
