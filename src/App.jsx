import "./App.css";
import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import About from "./components/AboutUs/About";
import Title from "./components/Title/Title";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Title mainTitle="About Us"/>
      <About/>
      <Title mainTitle="Testimonials"/>
      <Testimonials/>
      
    </>
  );
}

export default App;
