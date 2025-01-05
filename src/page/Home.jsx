import { useRef } from "react";
import AboutMe from "../components/AboutMe";
import { ContactUs } from "../components/ContactUs";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skill from "../components/Skill";

const Home = () => {

  const aboutme = useRef(null);
  const skills = useRef(null);
  const education = useRef(null);
  const porfolio = useRef(null);
  const contact = useRef(null);

  // Handle NavLink click to scroll to the respective component
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <Navbar skills={skills} aboutme={aboutme} contact={contact} porfolio={porfolio} education={education} handleScroll={handleScroll}></Navbar>
        <Hero></Hero>
        <div ref={aboutme}><AboutMe></AboutMe></div>
        <div ref={skills}
        ><Skill></Skill></div>
        <div ref={education}>
        <Education></Education>
        </div>
        <div ref={porfolio}>
        <Portfolio></Portfolio>
        </div>
        <div ref={contact}>
        <ContactUs></ContactUs>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
};

export default Home;
