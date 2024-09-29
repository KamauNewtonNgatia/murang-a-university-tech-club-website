import heroImage from "../../assets/heroimage.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Murang'a University Tech Club</h1>
        <p style={{ textAlign: "center" }}>Empowering Tech Minds</p>
      </div>
      <img
        src={heroImage}
        alt="Hero section cover image"
        className="hero-image"
      />
    </section>
  );
}

export default Hero;
