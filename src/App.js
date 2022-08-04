import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Inator from "./components/Inator.js"
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Home></Home>
      <Inator></Inator>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <SocialLinks></SocialLinks>

      
    </div>
  );
}

export default App;
